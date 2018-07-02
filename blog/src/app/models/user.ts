export class User {
    constructor(
        public firstname: string,
        public lastname: string,
        public country: string,
        public telephone: string,
        public email: string,
        public password: string,
        public password_confirmation: string,
    ) { }
}
