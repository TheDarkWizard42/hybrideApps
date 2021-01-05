export class Rechthoek {

    private _breedte: number;
    public get breedte(): number {
        return this._breedte;
    }
    public set breedte(v: number) {
        this._breedte = v;
    }

    private _hoogte: number;
    public get hoogte(): number {
        return this._hoogte;
    }
    public set hoogte(v: number) {
        this._hoogte = v;
    }

    constructor(_breedte: number, _hoogte: number) {
        this._breedte = _breedte
        this._hoogte = _hoogte
    }
    private berekenOppervlakte() {
        return this._breedte * this._hoogte;
    }

    public geefOppervlakte() {
        return this.berekenOppervlakte();
    }
    /**
     * DraaiFiguur
     */
    public DraaiFiguur() {
        [this.breedte, this.hoogte] = [this.hoogte, this.breedte];
        // var temp = this.hoogte;
        // this.hoogte=this.breedte;
        // this.breedte=temp;
    }
    public tekenFiguur(): string {
        let output: string = "";
        let opp = this.berekenOppervlakte();
        for (let i = 0; i < this.breedte; i++) {
            output += "-"
        }
        for (let j = 0; j < this.hoogte; j++) {
            output += "\n|";
            for (let k = 0; k < this.breedte - 2; k++) {

                if (j == Math.floor(this.hoogte / 2) && k == Math.floor(this.breedte / 2-2)) {
                    output += opp;
                    k += opp.toString().length - 1;
                }
                else {
                    output += " "
                }
            }
            output += "|\n";
        }
        for (let l = 0; l < this.breedte; l++) {
            output += "-"
        }
        return output;
    }
}