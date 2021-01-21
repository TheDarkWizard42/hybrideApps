import { IMovies } from "./IMovies";

export class Movies extends IMovies {
    public Plot: string;

    constructor(public Title: string, public Year: string, public Poster: string) {
        super();
    }
}