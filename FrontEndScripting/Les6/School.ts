import { Gebouw } from "./Gebouw";

export class School extends Gebouw {

 

    public Print() {
        console.log("Dit is een school met " + this.aantalRuimtes + " lokalen.");
    }

}
