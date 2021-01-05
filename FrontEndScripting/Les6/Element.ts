export class Element {

    private _waarde: string;
    public get waarde(): string {
        return this._waarde;
    }
    public set waarde(v: string) {
        this._waarde = v;
    }

    private _naam: string;
    public get naam(): string {
        return this._naam;
    }
    public set naam(v: string) {
        this._naam = v;
    }

  constructor(_waarde: string, _naam: string) {
    this._waarde = _waarde
    this._naam = _naam
  }

    public ToString() {
        return "ELEMENT: NAAM = " + this.naam + " - WAARDE = " + this.waarde;
    }
}