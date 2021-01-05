import { Game } from "./Game";

export class DeluxeEditionGame extends Game {
    public getVerkoopprijs() {
        return this.prijsexcl * 1.21 * 1.1;
    }
}