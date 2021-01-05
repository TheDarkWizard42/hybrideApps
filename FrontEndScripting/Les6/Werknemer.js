"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Werknemer = void 0;
var Werknemer = /** @class */ (function () {
    function Werknemer(geboorteDatum, voornaam, naam) {
        this._geboorteDatum = geboorteDatum;
        this._voornaam = voornaam;
        this._naam = naam;
    }
    Object.defineProperty(Werknemer.prototype, "geboorteDatum", {
        get: function () {
            return this._geboorteDatum;
        },
        set: function (v) {
            this._geboorteDatum = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Werknemer.prototype, "voornaam", {
        get: function () {
            return this._voornaam;
        },
        set: function (v) {
            this._voornaam = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Werknemer.prototype, "naam", {
        get: function () {
            return this._naam;
        },
        set: function (v) {
            this._naam = v;
        },
        enumerable: false,
        configurable: true
    });
    Werknemer.prototype.ToonInfo = function () {
        console.log("Naam: " + this._naam);
        console.log("Voornaam: " + this._voornaam);
        console.log("Geboortedatum: " + this._geboorteDatum.toDateString());
    };
    return Werknemer;
}());
exports.Werknemer = Werknemer;
