import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  search: string = "";
  movielist: Movie[] = [];
  constructor(private movieService: MovieService) { }
  public SearchMovies() {
    this.movieService.getMovies(this.search).subscribe(data => { this.movielist = data });
  }
  ngOnInit() {
  }

}
