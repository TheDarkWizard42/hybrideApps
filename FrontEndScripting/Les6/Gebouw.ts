export class Gebouw {

    private _aantalRuimtes: number;
    public get aantalRuimtes(): number {
        return this._aantalRuimtes;
    }
    public set aantalRuimtes(v: number) {
        this._aantalRuimtes = v;
    }

    constructor() {
        this._aantalRuimtes = 4;
    }
    public Print() {
        console.log("Gebouw met " + this.aantalRuimtes + " kamers.");
    }
}