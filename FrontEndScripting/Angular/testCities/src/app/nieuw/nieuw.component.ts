import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../cities/city';
import { CityService } from '../city.service';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-nieuw',
  templateUrl: './nieuw.component.html',
  styleUrls: ['./nieuw.component.scss']
})
export class NieuwComponent implements OnInit {
  newcity: City = new City();

  constructor(private cityService: CityService, private router: Router) { }
  ngOnInit(): void {
  }
  opslaan() {
    this.cityService.addCity(this.newcity).subscribe(arg => { });
    this.router.navigateByUrl('');
  }
  addHighlight() {
    //let highlight: Highlight=new Highlight("");
    this.newcity.highlights.push(new Highlight(""));
  }
  removeHighlight(index: number) {
    this.newcity.highlights.splice(index, 1);
  }
  trackByItems(index: number): number {
    return index;
  }
}
