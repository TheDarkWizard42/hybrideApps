import { Highlight } from "../highlight";

export class City {
    constructor(public id: number, public name: string, public province: string, public highlights?: Highlight[], public rating?: number) {

    }
}
