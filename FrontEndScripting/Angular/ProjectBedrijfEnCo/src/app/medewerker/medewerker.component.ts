import { Component, Input, OnInit } from '@angular/core';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-medewerker',
  templateUrl: './medewerker.component.html',
  styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent implements OnInit {
  @Input() medewerker: Medewerker = new Medewerker("", "", "");

  public showAlert(name: string, email: string) {
    alert(name + " " + email);
  }
  constructor() { }


  ngOnInit(): void {
  }

}
