export class Cel{
    
    private _rij : number;
    public get rij() : number {
        return this._rij;
    }
    public set rij(v : number) {
        this._rij = v;
    }
    
    private _kolom : string;
    public get kolom() : string {
        return this._kolom;
    }
    public set kolom(v : string) {
        this._kolom = v;
    }
    
    private _inhoud : string;
    public get inhoud() : string {
        return this._inhoud;
    }
    public set inhoud(v : string) {
        this._inhoud = v;
    }

  constructor(_rij: number, _kolom: string, _inhoud: string) {
    this._rij = _rij
    this._kolom = _kolom
    this._inhoud = _inhoud
  }
    
}