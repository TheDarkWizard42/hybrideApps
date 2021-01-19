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
  constructor(private gebruikersService: GebruikerService) {
    this.gebruikersService.getMedewerkers().subscribe(data => { this.medewerkers = data });
  }

  public Toevoegen() {
    this.gebruikersService.addMedewerker(this.name, this.email, this.afb).subscribe(data => { this.gebruikersService.getMedewerkers().subscribe(data => { this.medewerkers = data }) });
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
  clearMedewerkers() {
    this.gebruikersService.clearMedewerkers();
  }

  ngOnInit(): void {
  }

}
