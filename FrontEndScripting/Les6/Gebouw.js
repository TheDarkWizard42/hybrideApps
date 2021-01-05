"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gebouw = void 0;
var Gebouw = /** @class */ (function () {
    function Gebouw() {
        this._aantalRuimtes = 4;
    }
    Object.defineProperty(Gebouw.prototype, "aantalRuimtes", {
        get: function () {
            return this._aantalRuimtes;
        },
        set: function (v) {
            this._aantalRuimtes = v;
        },
        enumerable: false,
        configurable: true
    });
    Gebouw.prototype.Print = function () {
        console.log("Gebouw met " + this.aantalRuimtes + " kamers.");
    };
    return Gebouw;
}());
exports.Gebouw = Gebouw;
