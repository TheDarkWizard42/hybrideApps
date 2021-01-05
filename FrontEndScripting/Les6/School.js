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
exports.School = void 0;
var Gebouw_1 = require("./Gebouw");
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    School.prototype.Print = function () {
        console.log("Dit is een school met " + this.aantalRuimtes + " lokalen.");
    };
    return School;
}(Gebouw_1.Gebouw));
exports.School = School;
