import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from './cities/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>("https://cities-7c1d0-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .pipe(
        map(
          data => {
            let arr: City[] = [];
            for (let x in data) {
              let c: City = new City();
              c.name = data[x]['name'];
              c.id = x;
              c.highlights = data[x]['highlights'];
              c.province = data[x]['province'];
              arr.push(c);
            }
            return arr;
          }
        )
      );
  }
  addCity(city: City): Observable<any> {
    return this.http.post("https://cities-7c1d0-default-rtdb.europe-west1.firebasedatabase.app/.json", city);
  }
}
