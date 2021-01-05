"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalPrinter = void 0;
var TerminalPrinter = /** @class */ (function () {
    function TerminalPrinter() {
    }
    /**
     * Afdrukken
IAfdrukbaat     */
    TerminalPrinter.prototype.Afdrukken = function (print) {
        console.log("Titel " + print.geefTitel() + "\nLetterType: " + print.geefLettertypeId() + "\nSamenvatting: " + print.geefTeDrukken());
    };
    return TerminalPrinter;
}());
exports.TerminalPrinter = TerminalPrinter;
