import { Highlight } from "../highlight";

export class City {
    public id: string;
    public name: string;
    public province: string;
    public highlights?: Highlight[]=[];
    public rating?: number;
    constructor() {

    }
}
