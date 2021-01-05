"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rechthoek = void 0;
var Rechthoek = /** @class */ (function () {
    function Rechthoek(_breedte, _hoogte) {
        this._breedte = _breedte;
        this._hoogte = _hoogte;
    }
    Object.defineProperty(Rechthoek.prototype, "breedte", {
        get: function () {
            return this._breedte;
        },
        set: function (v) {
            this._breedte = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rechthoek.prototype, "hoogte", {
        get: function () {
            return this._hoogte;
        },
        set: function (v) {
            this._hoogte = v;
        },
        enumerable: false,
        configurable: true
    });
    Rechthoek.prototype.berekenOppervlakte = function () {
        return this._breedte * this._hoogte;
    };
    Rechthoek.prototype.geefOppervlakte = function () {
        return this.berekenOppervlakte();
    };
    /**
     * DraaiFiguur
     */
    Rechthoek.prototype.DraaiFiguur = function () {
        var _a;
        _a = [this.hoogte, this.breedte], this.breedte = _a[0], this.hoogte = _a[1];
        // var temp = this.hoogte;
        // this.hoogte=this.breedte;
        // this.breedte=temp;
    };
    Rechthoek.prototype.tekenFiguur = function () {
        var output = "";
        var opp = this.berekenOppervlakte();
        for (var i = 0; i < this.breedte; i++) {
            output += "-";
        }
        for (var j = 0; j < this.hoogte; j++) {
            for (var k = 0; k < this.breedte - 2; k++) {
                if (j == Math.floor(this.hoogte / 2) && k == Math.floor(this.breedte / 2 - 2)) {
                    output += opp;
                    k += opp.toString().length - 1;
                }
                else {
                    output += " ";
                }
            }
            output += "|\n";
        }
        for (var l = 0; l < this.breedte; l++) {
            output += "-";
        }
        return output;
    };
    return Rechthoek;
}());
exports.Rechthoek = Rechthoek;
