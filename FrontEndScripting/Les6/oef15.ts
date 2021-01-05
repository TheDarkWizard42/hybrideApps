import { Cel } from "./Cel";
import { Rapport } from "./Rapport";
import { Rekenblad } from "./Rekenblad";
import { TerminalPrinter } from "./Terminalprinter";

let rb1: Rekenblad = new Rekenblad("Rekenblad 1");
let rb2: Rekenblad = new Rekenblad("Rekenblad 2");
let r1: Rapport = new Rapport();
r1.titel = "Rapport 1";
r1.inhoud = "Dit is een testinhoud van rapport 1";

rb1.setInhoud(new Cel(1, "A", "€105"));
rb1.setInhoud(new Cel(3, "B", "15%"));
rb1.setInhoud(new Cel(2, "D", "€10"));
rb2.setInhoud(new Cel(5, "F", "€15"));
rb2.setInhoud(new Cel(6, "G", "€20"));

let printer: TerminalPrinter = new TerminalPrinter();
printer.Afdrukken(rb1)
printer.Afdrukken(rb2)
printer.Afdrukken(r1)