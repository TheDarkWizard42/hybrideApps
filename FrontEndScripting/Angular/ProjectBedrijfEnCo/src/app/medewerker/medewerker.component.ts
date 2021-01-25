import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GebruikerService } from '../gebruiker.service';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-medewerker',
  templateUrl: './medewerker.component.html',
  styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent implements OnInit {
  @Input() medewerker: Medewerker = new Medewerker("", "", "", "");
  medewerkers: Medewerker[] = [];
  public verwijderMedewerker(id: any) {
    this.gebruikersService.deleteMedewerker(id).subscribe(data => { this.gebruikersService.getMedewerkers().subscribe(data => { this.medewerkers = data }); });
  }

  public showAlert(name: string, email: string) {
    alert(name + " " + email);
  }
  constructor(private gebruikersService: GebruikerService, private router: Router) {
    this.gebruikersService.getMedewerkers().subscribe(data => { this.medewerkers = data });
  }


  ngOnInit(): void {

  }
  newMedewerker() {
    this.router.navigateByUrl("/medewerker/new");
  }
}