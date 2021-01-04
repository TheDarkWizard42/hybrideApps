"use strict";
exports.__esModule = true;
var Opleiding_1 = require("./Opleiding");
var opleiding1 = new Opleiding_1.Opleiding("jos", "frank", new Date("2020-04-12"), new Date("2020-04-19"));
var opleiding2 = new Opleiding_1.Opleiding("frans", "frank", new Date("2020-04-21"), new Date("2020-05-31"));
var opleiding3 = new Opleiding_1.Opleiding("peeter", "marc", new Date("2020-10-01"), new Date("2020-04-01"));
for (var prop in opleiding1) {
    console.log(prop + ': ' + opleiding1[prop]);
}
for (var prop in opleiding2) {
    console.log(prop + ': ' + opleiding2[prop]);
}
for (var prop in opleiding3) {
    console.log(prop + ': ' + opleiding3[prop]);
}
