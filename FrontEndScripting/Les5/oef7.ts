import { Opleiding } from './Opleiding';

let opleiding1: Opleiding = new Opleiding("jos", "frank", new Date("2020-04-12"), new Date("2020-04-19"));
let opleiding2: Opleiding = new Opleiding("frans", "frank", new Date("2020-04-21"), new Date("2020-05-31"));
let opleiding3: Opleiding = new Opleiding("peeter", "marc", new Date("2020-10-01"), new Date("2020-04-01"));

for (let prop in opleiding1) {
    console.log(prop + ': ' + opleiding1[prop]);
}
for (let prop in opleiding2) {
    console.log(prop + ': ' + opleiding2[prop]);
}
for (let prop in opleiding3) {
    console.log(prop + ': ' + opleiding3[prop]);
}