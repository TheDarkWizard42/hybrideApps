import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bestelling } from '../bestelling';
import { FilterService } from '../filter.service';
import { Klant } from '../klant';
import { Medewerker } from '../medewerker';

@Component({
  selector: 'app-zoekresultaten',
  templateUrl: './zoekresultaten.component.html',
  styleUrls: ['./zoekresultaten.component.scss']
})
export class ZoekresultatenComponent implements OnInit {

  constructor(private filterservice: FilterService, private router: Router) { }
  filterGebruiker: Medewerker[] = [];
  filterKlant: Klant[] = [];
  filterOrder: Bestelling[] = [];
  ngOnInit(): void {
    this.filterservice.filterUser().subscribe(x => this.filterGebruiker = x);
    this.filterservice.filterKlant().subscribe(x => this.filterKlant = x);
  }

}
