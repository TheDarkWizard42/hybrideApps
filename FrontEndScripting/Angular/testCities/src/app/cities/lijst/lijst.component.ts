import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/city.service';
import { City } from '../city';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.scss']
})
export class LijstComponent implements OnInit {
  cities: Observable<City[]> ;

  selectedCity: City;


  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities=this.cityService.getCities();
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
