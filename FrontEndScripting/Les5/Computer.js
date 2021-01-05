"use strict";
exports.__esModule = true;
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer(m, t, pexl) {
        this.merk = m;
        this.type = t;
        this.prijsexcl = pexl;
        this.prijsincl = pexl * 1.21;
    }
    return Computer;
}());
exports.Computer = Computer;
