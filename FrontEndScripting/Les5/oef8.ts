import { Computer } from "./Computer";

let computers: Computer[] = new Array;

let computer1 = new Computer("Msi", "laptop", 1500);
let computer2 = new Computer("Msi", "Desktop", 1800);
let computer3 = new Computer("Dell", "laptop", 780);
let computer4 = new Computer("HP", "laptop", 980);
let computer5 = new Computer("Medion", "laptop", 580);
computers.push(computer1);
computers.push(computer2);
computers.push(computer3);
computers.push(computer4);
computers.push(computer5);
computers.forEach(element => {
    console.log(element);
});