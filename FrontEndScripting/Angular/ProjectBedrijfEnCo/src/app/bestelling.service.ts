import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bestelling } from './bestelling';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  constructor(private http: HttpClient) { }
  getOrders(): Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Bestellingen.json")
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