export class Game {

    private _titel: string;
    public get titel(): string {
        return this._titel;
    }
    public set titel(v: string) {
        this._titel = v;
    }

    private _uitgever: string;
    public get uitgever(): string {
        return this._uitgever;
    }
    public set uitgever(v: string) {
        this._uitgever = v;
    }

    private _prijsexcl: number;
    public get prijsexcl(): number {
        return this._prijsexcl;
    }
    public set prijsexcl(v: number) {
        this._prijsexcl = v;
    }

    constructor(_titel: string, _uitgever: string, _prijsexcl: number) {
        this._titel = _titel
        this._uitgever = _uitgever
        this._prijsexcl = _prijsexcl
    }
    /**
     * getVerkoopprijs
     */
    public getVerkoopprijs() {
        return this.prijsexcl * 1.21;
    }
}