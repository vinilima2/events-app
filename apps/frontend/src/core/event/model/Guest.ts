export default interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    isAccompanied: boolean;
    numberCompanions: number;
}