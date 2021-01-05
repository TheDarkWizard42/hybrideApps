export class Cel {

    private _rij: number;
    public get rij(): number {
        return this._rij;
    }
    public set rij(v: number) {
        this._rij = v;
    }

    private _kolom: string;
    public get kolom(): string {
        return this._kolom;
    }
    public set kolom(v: string) {
        this._kolom = v;
    }

    private _inhoud: string;
    public get inhoud(): string {
        return this._inhoud;
    }
    public set inhoud(v: string) {
        this._inhoud = v;
    }


    constructor(rij: number, kolom: string, inhoud: string) {
        this._rij = rij
        this._kolom = kolom
        this._inhoud = inhoud
    }


}