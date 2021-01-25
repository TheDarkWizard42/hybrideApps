import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.scss']
})
export class LijstComponent implements OnInit {
  cities: City[] = [
    { id: 1, name: "leuven", province: "vlaams-brabant", highlights: ["begijnhof", "kruidentuin"], rating: 5 },
    { id: 2, name: "Diest", province: "vlaams-brabant", highlights: ["citadel", "begijnhof"] }
  ]

  selectedCity: City;


  constructor() { }

  ngOnInit(): void {
  }
  showDetails(city: City) {
    this.selectedCity = city
  }
  updateRatring(rating: number) {
    if (this.selectedCity.rating == undefined) {
      this.selectedCity.rating = 0
    }
    this.selectedCity.rating += rating;
  }
}
