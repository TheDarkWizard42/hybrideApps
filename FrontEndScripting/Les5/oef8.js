"use strict";
exports.__esModule = true;
var Computer_1 = require("./Computer");
var computers = new Array;
var computer1 = new Computer_1.Computer("Msi", "laptop", 1500);
var computer2 = new Computer_1.Computer("Msi", "Desktop", 1800);
var computer3 = new Computer_1.Computer("Dell", "laptop", 780);
var computer4 = new Computer_1.Computer("HP", "laptop", 980);
var computer5 = new Computer_1.Computer("Medion", "laptop", 580);
computers.push(computer1);
computers.push(computer2);
computers.push(computer3);
computers.push(computer4);
computers.push(computer5);
computers.forEach(function (element) {
    console.log(element);
});
