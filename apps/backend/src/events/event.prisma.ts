import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core/dist';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) { }

    save(event: Event) {
        return this.prisma.event.create({ data: { ...(event as any), guests: { create: event.guests } }, })
    }

    saveGuest(event: Event, guest: Guest) {
        return this.prisma.guest.create({ data: { ...guest, numberCompanions: +(guest.numberCompanions ?? 0), event: { connect: { id: event.id } } } })
    }

    async findAll(): Promise<Event[]> {
        return this.prisma.event.findMany() as any;
    }

    async findById(id: string, full: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({ where: { id }, include: { guests: full } }) as any;
    }

    async findByAlias(alias: string, full: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            select: {
                id: true,
                name: true, alias: true,
                description: true, password: full,
                expectedAudience: full, guests: full,
                backgroundImage: true, date: true,
                image: true, locale: true
            }, where: { alias }
        }) as any;
    }
}
