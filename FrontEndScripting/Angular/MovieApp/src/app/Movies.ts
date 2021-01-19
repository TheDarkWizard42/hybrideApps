import { IMovies } from "./IMovies";

export class Movies extends IMovies {

    constructor(public Title: string, public Year: string, public Poster: string) {
        super();
    }
}