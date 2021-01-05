import { Element } from "./Element"
export class Lijst {

    private _List: Element[]=[];
    public get List(): Element[] {
        return this._List;
    }
    public set List(v: Element[]) {
        this._List = v;
    }
    /**
     * Voegtoe
     */
    public Voegtoe(element: Element) {
        this._List.push(element)
    }
    public Wissen() {
        this._List = new Array;
    }
    /**
     * Aantal
     */
    public Aantal() {
        console.log( this._List.length);
    }
    /**
     * ToString
     */
    public ToString() {
        this._List.forEach(element => {
            console.log(element.ToString())
        });
    }
}