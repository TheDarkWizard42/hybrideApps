import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './cities/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>("https://cities-7c1d0-default-rtdb.europe-west1.firebasedatabase.app/.json")
  }
}
