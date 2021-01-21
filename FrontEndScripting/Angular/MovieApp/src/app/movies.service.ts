import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './Movies';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovies(searchterm: string): Observable<Movies[]> {
    return this.http.get<Movies[]>("http://www.omdbapi.com/?apikey=8e10404c&s=" + searchterm)
      .pipe(map(data => {
        // let arr: Movies[] = [];
        // for (let x in data["Search"]) {

        //   let movie: Movies = new Movies(data["Search"][x]["Title"], data["Search"][x]["Year"], data["Search"][x]["Poster"])
        //   arr.push(movie);
        // }
        // return arr;
        //KORTE VERSIE!!!!!!!
        return data["Search"]
      }));
  }
  getPlot(movie: Movies) {
   return this.http.get<Movies>("http://www.omdbapi.com/?apikey=8e10404c&t=" + movie.Title + "&plot=full").pipe(map(data2 => { return data2["Plot"] }));

  }

}
