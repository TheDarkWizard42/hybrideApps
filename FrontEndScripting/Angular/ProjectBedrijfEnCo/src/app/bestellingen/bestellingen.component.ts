import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bestelling } from '../bestelling';
import { BestellingService } from '../bestelling.service';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.scss']
})
export class BestellingenComponent implements OnInit {
  klanten: Klant[] = [];
  bestellingen:Bestelling[]=[];
  constructor(private klantservice: KlantService, private bestellingservice: BestellingService) { }

  ngOnInit(): void {
    this.klantservice.getKlanten().subscribe(x => { this.klanten = x });
    this.bestellingservice.getOrders().subscribe(x=>{this.bestellingen=x})
  }
  removeOrder(){
  }

}
