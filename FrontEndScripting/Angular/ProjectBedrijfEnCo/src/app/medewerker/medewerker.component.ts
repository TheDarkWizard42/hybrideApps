import { Component, Input, OnInit } from '@angular/core';
import { GebruikerService } from '../gebruiker.service';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-medewerker',
  templateUrl: './medewerker.component.html',
  styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent implements OnInit {
  @Input() medewerker: Medewerker = new Medewerker("","", "", "");
  public verwijderMedewerker(id:string){
this.gebruikersService.deleteMedewerker(id);
  }

  public showAlert(name: string, email: string) {
    alert(name + " " + email);
  }
  constructor(private gebruikersService: GebruikerService) { }


  ngOnInit(): void {
  }

}