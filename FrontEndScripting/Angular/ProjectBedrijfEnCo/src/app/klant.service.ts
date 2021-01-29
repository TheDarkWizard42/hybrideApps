import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Klant } from './klant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlantService {

  constructor(private http: HttpClient) { }

  getKlanten(): Observable<Klant[]> {

    return this.http.get<Klant[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Klanten.json")
      .pipe(map(data => {
        let arr: Klant[] = [];
        for (let x in data) {
          let k: Klant = new Klant(data[x]["naam"], data[x]["voornaam"], data[x]["postcode"], data[x]["plaats"], data[x]["straat"], x);
          arr.push(k);
        }
        return arr
      }));
  }
  getklant(id: string): Observable<Klant> {
    return this.http.get<Klant>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Klanten/" + id + ".json")
  }
  addKlant(naam: string, plaats: string, postcode: number, straat: string, voornaam: string) {
    let klant: Klant = new Klant(naam, plaats, postcode, straat, voornaam);
    return this.http.post("https://mijneersteapp-e0fee-default-rtdb.europe-west1.firebasedatabase.app/Klanten.json", klant);
  }
}
