export class Recept {
    naam: string;
    img: string;
    id: string;
    ingredienten: string;
    constructor(
        naam: string,
        img: string,
        ingredienten: string
    ) {
        this.naam = naam
        this.img = img

        this.ingredienten = ingredienten
    }

}
