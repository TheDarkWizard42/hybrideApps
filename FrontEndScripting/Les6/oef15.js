"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cel_1 = require("./Cel");
var Rapport_1 = require("./Rapport");
var Rekenblad_1 = require("./Rekenblad");
var Terminalprinter_1 = require("./Terminalprinter");
var rb1 = new Rekenblad_1.Rekenblad("Rekenblad 1");
var rb2 = new Rekenblad_1.Rekenblad("Rekenblad 2");
var r1 = new Rapport_1.Rapport();
r1.titel = "Rapport 1";
r1.inhoud = "Dit is een testinhoud van rapport 1";
rb1.setInhoud(new Cel_1.Cel(1, "A", "€105"));
rb1.setInhoud(new Cel_1.Cel(3, "B", "15%"));
rb1.setInhoud(new Cel_1.Cel(2, "D", "€10"));
rb2.setInhoud(new Cel_1.Cel(5, "F", "€15"));
rb2.setInhoud(new Cel_1.Cel(6, "G", "€20"));
var printer = new Terminalprinter_1.TerminalPrinter();
printer.Afdrukken(rb1);
printer.Afdrukken(rb2);
printer.Afdrukken(r1);
