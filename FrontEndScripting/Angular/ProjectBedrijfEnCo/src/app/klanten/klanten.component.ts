import { Component, OnInit } from '@angular/core';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {
  klanten: Klant[] = [];
  constructor(private klantservice: KlantService) { }

  ngOnInit(): void {
    this.klantservice.getKlanten().subscribe(x => { this.klanten = x });
  }

}
