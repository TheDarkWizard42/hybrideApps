"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lijst = void 0;
var Lijst = /** @class */ (function () {
    function Lijst() {
        this._List = [];
    }
    Object.defineProperty(Lijst.prototype, "List", {
        get: function () {
            return this._List;
        },
        set: function (v) {
            this._List = v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Voegtoe
     */
    Lijst.prototype.Voegtoe = function (element) {
        this._List.push(element);
    };
    Lijst.prototype.Wissen = function () {
        this._List = new Array;
    };
    /**
     * Aantal
     */
    Lijst.prototype.Aantal = function () {
        console.log(this._List.length);
    };
    /**
     * ToString
     */
    Lijst.prototype.ToString = function () {
        this._List.forEach(function (element) {
            console.log(element.ToString());
        });
    };
    return Lijst;
}());
exports.Lijst = Lijst;
