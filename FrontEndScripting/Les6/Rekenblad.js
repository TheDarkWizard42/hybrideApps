"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rekenblad = void 0;
var IAfdrukbaar_1 = require("./IAfdrukbaar");
var Rekenblad = /** @class */ (function (_super) {
    __extends(Rekenblad, _super);
    function Rekenblad(_titel) {
        var _this = _super.call(this) || this;
        _this._cellen = [];
        _this._titel = _titel;
        return _this;
    }
    Object.defineProperty(Rekenblad.prototype, "titel", {
        get: function () {
            return this._titel;
        },
        set: function (v) {
            this._titel = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rekenblad.prototype, "cellen", {
        get: function () {
            return this._cellen;
        },
        set: function (v) {
            this._cellen = v;
        },
        enumerable: false,
        configurable: true
    });
    Rekenblad.prototype.geefTitel = function () {
        return this.titel;
    };
    Rekenblad.prototype.geefTeDrukken = function () {
        var string = "";
        this.cellen.forEach(function (element) {
            string += "CEL " + element.kolom + element.rij + ": " + element.inhoud + "\n";
        });
        return this.titel + "\n" + string;
    };
    Rekenblad.prototype.geefLettertypeId = function () {
        return 1;
    };
    Rekenblad.prototype.setInhoud = function (cel) {
        this.cellen.push(cel);
    };
    return Rekenblad;
}(IAfdrukbaar_1.IAfdrukbaar));
exports.Rekenblad = Rekenblad;
