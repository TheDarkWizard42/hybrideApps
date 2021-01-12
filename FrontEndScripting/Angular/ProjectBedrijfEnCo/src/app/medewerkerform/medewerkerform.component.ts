import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../gebruiker.service';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-medewerkerform',
  templateUrl: './medewerkerform.component.html',
  styleUrls: ['./medewerkerform.component.scss']
})
export class MedewerkerformComponent implements OnInit {
  name: string = "";
  email: string = "";
  afb: string = "";
  buttongeg: string = "Toon Gegevens";
  reset = false;
  medewerkers: Medewerker[] = [];
  listFilled: boolean = true;

  public Toevoegen() {
    let mw = new Medewerker(this.name, this.email, this.afb);
    this.medewerkers.push(mw);
    console.log(mw);
    this.Reset();
    this.listFilled = true;
  }
  public Wissen() {
    this.medewerkers = [];
    this.listFilled = false;
  }

  public Reset() {
    this.name = "";
    this.email = "";
    this.afb = "";
  }


  Resetknop() {
    if (this.name != "" || this.email != "" || this.afb != "") {
      return false;
    }
    else {
      return true;
    }
  }
  addMedewerker() {
    this.gebruikersService.addMedewerker(this.name, this.email, this.afb);
  }
  clearMedewerkers() {
    this.gebruikersService.clearMedewerkers();
    this.medewerkers = this.gebruikersService.getMedewerkers();
  }
  constructor(private gebruikersService: GebruikerService) {
    this.medewerkers = this.gebruikersService.getMedewerkers();
  }
  ngOnInit(): void {
  }

}
