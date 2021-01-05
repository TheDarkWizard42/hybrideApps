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
exports.DeluxeEditionGame = void 0;
var Game_1 = require("./Game");
var DeluxeEditionGame = /** @class */ (function (_super) {
    __extends(DeluxeEditionGame, _super);
    function DeluxeEditionGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeluxeEditionGame.prototype.getVerkoopprijs = function () {
        return this.prijsexcl * 1.21 * 1.1;
    };
    return DeluxeEditionGame;
}(Game_1.Game));
exports.DeluxeEditionGame = DeluxeEditionGame;
