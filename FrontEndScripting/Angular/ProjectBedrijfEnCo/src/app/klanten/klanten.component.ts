import { Component, OnInit } from '@angular/core';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {
  klanten: Klant[] = [];
  constructor(private klantservice: KlantService, private router: Router) { }

  ngOnInit(): void {
    this.klantservice.getKlanten().subscribe(x => { this.klanten = x });
  }
  newKlant() {
    this.router.navigateByUrl("/klant/new");
  }
}
