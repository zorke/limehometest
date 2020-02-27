export class Hotel {
    constructor(
        public id: string,
        public title: string,
        public vicinity: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public latitude: number,
        public longitude: number
    ) {}
}