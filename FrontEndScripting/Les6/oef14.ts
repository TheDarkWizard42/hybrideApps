import { DeluxeEditionGame } from "./DeluxeEditionGame";
import { Game } from "./Game";

let g1: Game = new Game("trine 4", "Frozenbite", 20);
let g2: Game = new Game("trine 3", "Frozenbite", 5);
let g3: Game = new Game("trine 2", "Frozenbite", 4);
let deg: DeluxeEditionGame = new DeluxeEditionGame("Ori and the will of the wisps", "Moon studio's", 20)

console.log(g1.getVerkoopprijs());
console.log(g2.getVerkoopprijs());
console.log(g3.getVerkoopprijs());
console.log(deg.getVerkoopprijs());