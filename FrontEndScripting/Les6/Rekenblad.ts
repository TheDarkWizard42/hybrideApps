import { Cel } from "./Cel";
import { IAfdrukbaar } from "./IAfdrukbaar";

export class Rekenblad extends IAfdrukbaar {

    private _titel: string;
    public get titel(): string {
        return this._titel;
    }
    public set titel(v: string) {
        this._titel = v;
    }

    private _cellen: Cel[] = [];
    public get cellen(): Cel[] {
        return this._cellen;
    }
    public set cellen(v: Cel[]) {
        this._cellen = v;
    }

    constructor(_titel: string) {
        super();
        this._titel = _titel
    }

    geefTitel(): string {
        return this.titel;
    }
    geefTeDrukken(): string {
        let string: string = "";
        this._cellen.forEach(element => {
            string += "CEL " + element.kolom + element.rij + ": " + element.inhoud + "\n";
        })
        return `${this.titel}\n${string}`;
    }
    geefLettertypeId(): number {
        return 1;
    }

    public setInhoud(cel: Cel) {
        this.cellen.push(cel)
    }
}