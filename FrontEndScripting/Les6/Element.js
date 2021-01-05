"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
var Element = /** @class */ (function () {
    function Element(_waarde, _naam) {
        this._waarde = _waarde;
        this._naam = _naam;
    }
    Object.defineProperty(Element.prototype, "waarde", {
        get: function () {
            return this._waarde;
        },
        set: function (v) {
            this._waarde = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "naam", {
        get: function () {
            return this._naam;
        },
        set: function (v) {
            this._naam = v;
        },
        enumerable: false,
        configurable: true
    });
    Element.prototype.ToString = function () {
        return "ELEMENT: NAAM = " + this.naam + " - WAARDE = " + this.waarde;
    };
    return Element;
}());
exports.Element = Element;
