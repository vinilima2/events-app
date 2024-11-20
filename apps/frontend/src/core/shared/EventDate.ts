export default class EventDate {
       static format(date: Date): string {
              const pad = (n: number) => n.toString().padStart(2, '0');

              const newDate = date ?? new Date();
              const year = newDate.getFullYear();
              const month = pad(newDate.getMonth() + 1);
              const day = newDate.getDate();
              const hour = newDate.getHours();
              const minute = newDate.getMinutes();

              return `${year}-${month}-${day}T${hour}:${minute}`;
       }

       static parseToDate(date: string): Date {
              const [year, month, day] = date.split('T')[0].split('-');
              const [hour, minute] = date.split('T')[1].split(':');
              return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
       }
}