import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Medewerker } from './medewerker';
import { Observable } from 'rxjs';
import { Klant } from './klant';
import { Bestelling } from './bestelling';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public zoekterm: string = "";
  constructor(private http: HttpClient) { }
  filterUser(): Observable<Medewerker[]> {
    return this.http.get<Medewerker[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Users.json?orderBy=\"naam\"&startAt=\"" + this.zoekterm + "\"&endAt=\"" + this.zoekterm + "~\"")
      .pipe(map(data => {
        let arr: Medewerker[] = [];
        for (let x in data) {
          let m: Medewerker = new Medewerker(data[x]["naam"], data[x]["email"], data[x]["afbeelding"], x);
          arr.push(m);
        }
        return arr
      }));
  }
  filterKlant(): Observable<Klant[]> {
    return this.http.get<Klant[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Klanten.json?orderBy=\"naam\"&startAt=\"" + this.zoekterm + "\"&endAt=\"" + this.zoekterm + "~\"")
      .pipe(map(data => {
        let arr: Klant[] = [];
        for (let x in data) {
          let k: Klant = new Klant(data[x]["naam"], data[x]["voornaam"], data[x]["postcode"], data[x]["plaats"], data[x]["straat"], x);
          arr.push(k);
        }
        return arr
      }));
  }
  filterOrder(): Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Bestellingen.json?orderBy=\"items/naam\"&startAt=\"" + this.zoekterm + "\"&endAt=\"" + this.zoekterm + "~\"")
      .pipe(map(data => {
        let arr: Bestelling[] = [];
        for (let x in data) {
          for (let y in data[x]['items']) {
            let b: Bestelling = new Bestelling(data[x]["items"][y]["naam"], data[x]["items"][y]["aantal"], data[x]["items"][y]["prijs"], data[x]["klantid"])
            arr.push(b);
          }
        }
        return arr;
      }))
  }
}
