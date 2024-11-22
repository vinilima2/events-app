export default class Password {
    static create(size: number = 12): string {
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // or lowercaseLetters.toUppercase()
        const numbers = '0123456789'
        const specialCharacters = '!@#$%&*'
        const groups = [lowercaseLetters, uppercaseLetters, numbers, specialCharacters];
        const password = [];

        for (let i = 0; i < size; i++) {
            const selectedGroup = groups[Math.floor(Math.random() * groups.length)];
            password.push(selectedGroup[Math.floor(Math.random() * groups.length)]);
        }

        return password.join('');
    }
}