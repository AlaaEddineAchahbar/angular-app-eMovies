export class Movie {
    constructor(public id: number,
        public title: string,
        public year: string,
        public released: string,
        public plot: string,
        public runtime: string,
        public genre: string,
        public director: string,
        public actors: string,
        public rating: number,
        public votes: number,
        public image: string,
        public language: string,
        public avalaible: boolean,
        public price: number) {}
}