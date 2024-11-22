import { v4 as uuid } from 'uuid';
import { PrismaClient } from "@prisma/client";
import { create } from 'domain';

async function seed(): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.event.create({
        data: {
            id: uuid(),
            alias: 'sample',
            date: new Date(),
            description: 'Sample Event',
            locale: 'Netherlands, NE',
            backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwQQxfXBDAWbLqSozY9j5R8g7ERLpK4r4bw&s',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FyT_q8DQBpYRxUr2MZGSYNqJbbM58KUOaw&s',
            expectedAudience: 2,
            name: 'Sample Event in Netherlands',
            password: '123456',
            guests: {
                create: [
                    {
                        id: uuid(),
                        email: 'mari@mari.mari.com',
                        confirmed: false,
                        isAccompanied: false,
                        name: 'Mari',
                        numberCompanions: 1
                    }
                ]
            }
        }
    })
}

seed()