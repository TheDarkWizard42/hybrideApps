export class Werknemer {

    private _geboorteDatum: Date;
    public get geboorteDatum(): Date {
        return this._geboorteDatum;
    }
    public set geboorteDatum(v: Date) {
        this._geboorteDatum = v;
    }

    private _voornaam: string;
    public get voornaam(): string {
        return this._voornaam;
    }
    public set voornaam(v: string) {
        this._voornaam = v;
    }

    private _naam: string;
    public get naam(): string {
        return this._naam;
    }
    public set naam(v: string) {
        this._naam = v;
    }

    constructor(geboorteDatum: Date, voornaam: string, naam: string) {
        this._geboorteDatum = geboorteDatum
        this._voornaam = voornaam
        this._naam = naam
    }

    public ToonInfo() {
        console.log("Naam: " + this._naam)
        console.log("Voornaam: " + this._voornaam)
        console.log("Geboortedatum: " + this._geboorteDatum.toDateString())
    }

}