"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cel = void 0;
var Cel = /** @class */ (function () {
    function Cel(_rij, _kolom, _inhoud) {
        this._rij = _rij;
        this._kolom = _kolom;
        this._inhoud = _inhoud;
    }
    Object.defineProperty(Cel.prototype, "rij", {
        get: function () {
            return this._rij;
        },
        set: function (v) {
            this._rij = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cel.prototype, "kolom", {
        get: function () {
            return this._kolom;
        },
        set: function (v) {
            this._kolom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cel.prototype, "inhoud", {
        get: function () {
            return this._inhoud;
        },
        set: function (v) {
            this._inhoud = v;
        },
        enumerable: false,
        configurable: true
    });
    return Cel;
}());
exports.Cel = Cel;
