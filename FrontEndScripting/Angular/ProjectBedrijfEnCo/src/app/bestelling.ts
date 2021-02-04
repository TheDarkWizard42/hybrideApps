export class Bestelling {
    public naam: string;
    public aantal: number;
    public prijs: number;
    public klantid: string;

  constructor(
    naam: string, 
    aantal: number, 
    prijs: number, 
    klantid: string
) {
    this.naam = naam
    this.aantal = aantal
    this.prijs = prijs
    this.klantid = klantid
  }

}
