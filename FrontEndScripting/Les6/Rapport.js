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
exports.Rapport = void 0;
var IAfdrukbaar_1 = require("./IAfdrukbaar");
var Rapport = /** @class */ (function (_super) {
    __extends(Rapport, _super);
    function Rapport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Rapport.prototype, "titel", {
        get: function () {
            return this._titel;
        },
        set: function (v) {
            this._titel = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rapport.prototype, "inhoud", {
        get: function () {
            return this._inhoud;
        },
        set: function (v) {
            this._inhoud = v;
        },
        enumerable: false,
        configurable: true
    });
    Rapport.prototype.geefTitel = function () {
        return this.titel;
    };
    Rapport.prototype.geefTeDrukken = function () {
        return this.inhoud;
    };
    Rapport.prototype.geefLettertypeId = function () {
        return 5;
    };
    return Rapport;
}(IAfdrukbaar_1.IAfdrukbaar));
exports.Rapport = Rapport;
