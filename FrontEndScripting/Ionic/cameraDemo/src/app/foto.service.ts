import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from './foto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) { }
  saveFoto(Base64: string, naam: string): Observable<Foto> {
    let f = new Foto();
    f.data = Base64;
    f.naam = naam;
    return this.http.post<Foto>("https://fotogalerij2021-default-rtdb.europe-west1.firebasedatabase.app/.json", f)
  }
  getFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>("https://fotogalerij2021-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .pipe(map(
        data => {
          let fotos: Foto[] = [];
          for (let index in data) {
            let f = new Foto();
            f.data = data[index]['data'];
            f.id = index;
            f.naam = data[index]['naam'];
            fotos.push(f);
          }
          return fotos;
        }
      ))
  }
  getFoto(id: string): Observable<Foto> {
    // let foto:Foto;
    return this.http.get<Foto>("https://fotogalerij2021-default-rtdb.europe-west1.firebasedatabase.app/" + id + ".json");
  }
  deleteFoto(id: string): Observable<any> {
    return this.http.delete("https://fotogalerij2021-default-rtdb.europe-west1.firebasedatabase.app/" + id + ".json")
  }

}
