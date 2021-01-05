"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(_titel, _uitgever, _prijsexcl) {
        this._titel = _titel;
        this._uitgever = _uitgever;
        this._prijsexcl = _prijsexcl;
    }
    Object.defineProperty(Game.prototype, "titel", {
        get: function () {
            return this._titel;
        },
        set: function (v) {
            this._titel = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "uitgever", {
        get: function () {
            return this._uitgever;
        },
        set: function (v) {
            this._uitgever = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "prijsexcl", {
        get: function () {
            return this._prijsexcl;
        },
        set: function (v) {
            this._prijsexcl = v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * getVerkoopprijs
     */
    Game.prototype.getVerkoopprijs = function () {
        return this.prijsexcl * 1.21;
    };
    return Game;
}());
exports.Game = Game;
