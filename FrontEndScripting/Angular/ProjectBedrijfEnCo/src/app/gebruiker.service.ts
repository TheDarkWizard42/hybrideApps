import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { count } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Medewerker } from './medewerker';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {
  constructor(private http: HttpClient) { }
  getMedewerkers(): Observable<Medewerker[]> {

    return this.http.get<Medewerker[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Users.json")
      .pipe(map(data => {
        let arr: Medewerker[] = [];
        for (let x in data) {
          let m: Medewerker = new Medewerker(data[x]["naam"], data[x]["email"], data[x]["afbeelding"], x);
          arr.push(m);
        }
        return arr
      }));
  }
  addMedewerker(name: string, email: string, image: string) {
    let m: Medewerker = new Medewerker(name, email, image)
    return this.http.post("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Users.json", m);
    //this.medewerkers.push(m);
  }
  deleteMedewerker(id: string):Observable<any> {
   return this.http.delete("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Users/" + id + ".json");
  }

  aantalMdwOphalen(): Observable<number> {
    return this.http.get<Medewerker[]>("https://bedrijfcoproject-default-rtdb.europe-west1.firebasedatabase.app/Users.json")
      .pipe(map(data => {
        let arr: Medewerker[] = [];
        for (let x in data) {
          let m: Medewerker = new Medewerker(data[x]["naam"], data[x]["email"], data[x]["afbeelding"], x);
          arr.push(m);
        }
        return arr.length
      }));
  }
}
