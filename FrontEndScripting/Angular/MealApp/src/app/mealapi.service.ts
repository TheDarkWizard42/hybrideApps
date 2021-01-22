import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient';
import { Meal } from './meal';

@Injectable({
  providedIn: 'root'
})
export class MealapiService {

  constructor(private http: HttpClient) { }
  getGerechten(zoekterm: string, type: number): Observable<Meal[]> {
    let url:string;
    if (type==1) {
      url="https://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else {
      url="https://www.themealdb.com/api/json/v1/1/filter.php?i=";

    }
    return this.http.get<Meal[]>(url + zoekterm)
      .pipe(
        map(
          (data) => { return data["meals"]; }
        ));
  }
  getIngredienten(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .pipe(
        map(
          (data) => { return data["meals"]; }
        ));
  }
}
