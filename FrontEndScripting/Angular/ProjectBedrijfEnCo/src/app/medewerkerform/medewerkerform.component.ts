import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private gebruikersService: GebruikerService, private router: Router) {
  }

  public Toevoegen() {
    this.gebruikersService.addMedewerker(this.name, this.email, this.afb).subscribe(x => this.backToList());
    this.Reset();
  }
  backToList(): void {
    this.router.navigateByUrl("/medewerker");
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


  ngOnInit(): void {
  }

}
