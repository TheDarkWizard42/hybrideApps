export class Klant {

    private _naam: string;
    public get naam(): string {
        return this._naam;
    }
    public set naam(v: string) {
        this._naam = v;
    }

    private _voornaam: string;
    public get voornaam(): string {
        return this._voornaam;
    }
    public set voornaam(v: string) {
        this._voornaam = v;
    }

    private _postcode: number;
    public get postcode(): number {
        return this._postcode;
    }
    public set postcode(v: number) {
        this._postcode = v;
    }

    private _plaats: string;
    public get plaats(): string {
        return this._plaats;
    }
    public set plaats(v: string) {
        this._plaats = v;
    }

    private _straat: string;
    public get straat(): string {
        return this._straat;
    }
    public set straat(v: string) {
        this._straat = v;
    }

    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }


    constructor(
        _naam: string,
        _voornaam: string,
        _postcode: number,
        _plaats: string,
        _straat: string,
        _id?: string
    ) {
        this._naam = _naam
        this._voornaam = _voornaam
        this._postcode = _postcode
        this._plaats = _plaats
        this._straat = _straat
        this._id = _id;
    }


}
