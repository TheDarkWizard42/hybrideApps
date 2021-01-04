"use strict";
exports.__esModule = true;
var Factuur_1 = require("./Factuur");
var factuur1 = new Factuur_1.Factuur();
factuur1.nummer = 101;
factuur1.klantnummer = 15;
factuur1.bedrag = 20;
var factuur2 = new Factuur_1.Factuur();
factuur2.nummer = 102;
factuur2.klantnummer = 37;
factuur2.bedrag = 105;
for (var item in factuur1) {
    console.log(item + ': ' + factuur1[item]);
}
for (var item in factuur2) {
    console.log(item + ': ' + factuur2[item]);
}
