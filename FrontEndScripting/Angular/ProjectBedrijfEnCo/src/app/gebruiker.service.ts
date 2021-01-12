import { Injectable } from '@angular/core';
import { Medewerker } from './medewerker';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {
  private medewerkers: Medewerker[] = [{ naam: "Maxim", email: "rez@zserz", afbeelding: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png/revision/latest/scale-to-width-down/150?cb=20160411211422" }, { naam: "Silke", email: "reqsfdfgz@dsq", afbeelding: "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Earthshaker_icon.png/revision/latest/scale-to-width-down/150?cb=20160411205323" }];
  getMedewerkers(): Medewerker[] {
    return this.medewerkers;
  }
  addMedewerker(name: string, email: string, image: string) {
    let m: Medewerker = new Medewerker(name, email, image)
    this.medewerkers.push(m);
  }
  clearMedewerkers() {
    this.medewerkers = [];
  }
  constructor() { }
}
