import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public favorieten: Movie[] = [];
  constructor(private http: HttpClient) { }
  getMovies(searchterm: string): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://www.omdbapi.com/?apikey=8e10404c&s=" + searchterm)
      .pipe(map(data => {
        return data["Search"]
      }));
  }
  getPlot(title: string) {
    return this.http.get<Movie>("http://www.omdbapi.com/?apikey=8e10404c&t=" + title + "&plot=full").pipe(map(
      data2 => { 
        let movie: Movie = new Movie(title,data2["Year"], data2["Poster"]);
        movie.Plot =data2["Plot"];
        return movie;
      }
        ));
        
  }
}
