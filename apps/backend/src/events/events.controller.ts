import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { complementEvent, Event, EventDate, Guest, Id, proccessGuest } from "core/dist/index";
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {

    constructor(readonly repository: EventPrisma) { }

    @Post()
    async saveEvent(@Body() newEvent: Event) {
        const event = await this.repository.findByAlias(newEvent?.alias ?? '');
        if (!event) {
            throw new Error('Event not found.');
        }

        if (event && event.id !== newEvent.id) {
            throw new Error(`Event with alias ${newEvent.alias} already exist. `);
        }


        const completeEvent = complementEvent(this.deserialize(newEvent));
        await this.repository.save(completeEvent);
    }

    @Post(':alias/guest')
    async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
        const event = await this.repository.findByAlias(alias ?? '');
        if (!event) {
            throw new Error('Event not found.');
        }
        const completeGuest = proccessGuest(guest);
        await this.repository.saveGuest(event, completeGuest);
    }

    @Post('access')
    async accessEvent(@Body() data: { id: string, password: string }) {
        const event = await this.repository.findById(data?.id ?? '');
        if (!event) {
            throw new Error('Event not found.');
        }

        if (event.password !== data.password) {
            throw new Error('Verify your password and try again.');
        }

        return this.serialize(event)
    }

    @Get(':idOrAlias')
    async findByIdOrAlias(@Param('idOrAlias') idOrAlias: string) {
        let event: Event | null;
        if (Id.isValid(idOrAlias)) {
            event = await this.repository.findById(idOrAlias, true);
        } else {
            event = await this.repository.findByAlias(idOrAlias, true);
        }
        return this.serialize(event)
    }


    @Get('validate/:alias/:id')
    async validateAlias(alias: string, id: string) {
        const event = await this.repository.findByAlias(alias);
        return { valid: !event || event.id === id }
    }


    private serialize(event: Event) {
        if (!event) return null;
        return {
            ...event,
            date: EventDate.format(event.date),
        };
    }

    private deserialize(event: any): Event {
        if (!event) return null;
        return {
            ...event,
            data: EventDate.parseToDate(event.date),
        } as Event;
    }
}