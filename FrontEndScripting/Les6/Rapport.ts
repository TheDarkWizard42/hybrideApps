import { IAfdrukbaar } from "./IAfdrukbaar";

export class Rapport extends IAfdrukbaar {

    private _titel: string;
    public get titel(): string {
        return this._titel;
    }
    public set titel(v: string) {
        this._titel = v;
    }

    private _inhoud: string;
    public get inhoud(): string {
        return this._inhoud;
    }
    public set inhoud(v: string) {
        this._inhoud = v;
    }

    geefTitel(): string {
        return this.titel;
    }
    geefTeDrukken(): string {
        return this.inhoud;
    }
    geefLettertypeId(): number {
        return 5;
    }

}