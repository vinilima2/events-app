export default class Id {

    static newId(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`
    }

    private static hash(): string {
        return Math.random().toString(36).substring(2, 15)
    }
}