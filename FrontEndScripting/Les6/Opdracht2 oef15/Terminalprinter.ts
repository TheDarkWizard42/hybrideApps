import { IAfdrukbaar } from "./IAfdrukbaar";

export class TerminalPrinter {

    /**
     * Afdrukken
IAfdrukbaat     */
    public Afdrukken(print: IAfdrukbaar) {
        console.log(`Titel ${print.geefTitel()}\nLetterType: ${print.geefLettertypeId()}\nSamenvatting: ${print.geefTeDrukken()}`);
    }

}