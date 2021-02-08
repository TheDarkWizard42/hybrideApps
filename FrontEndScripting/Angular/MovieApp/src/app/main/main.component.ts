import { Component, OnInit } from '@angular/core';
import { Movies } from '../Movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  search: string = "";
  movielist: Movies[] = [];
  selectedMovie: Movies = new Movies("", "", "");
  constructor(private moviesService: MoviesService) { }
  public SearchMovies() {
    this.moviesService.getMovies(this.search).subscribe(data => { this.movielist = data });
  }
  public getPlot(movie: Movies) {
    this.moviesService.getPlot(movie).subscribe(data => { this.selectedMovie.Plot = data; });
  }
  public addFavorit(v: Movies) {
    this.moviesService.addFavorite(v);
  }
  ngOnInit(): void {
  }

}
