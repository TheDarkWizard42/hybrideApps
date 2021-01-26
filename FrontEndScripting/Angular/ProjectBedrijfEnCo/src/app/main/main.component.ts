import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../gebruiker.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public aantalmdw: number = 0;
  constructor(private gebruikerservice: GebruikerService) {

  }

  ngOnInit(): void {
    this.gebruikerservice.aantalMdwOphalen().subscribe(x => { this.aantalmdw = x });
  }

}
