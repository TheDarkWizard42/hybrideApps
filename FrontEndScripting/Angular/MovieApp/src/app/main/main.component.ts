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
  constructor(private moviesService: MoviesService) { }
  public SearchMovies() {
    this.moviesService.getMovies(this.search).subscribe(data => { this.movielist = data });
  }
  ngOnInit(): void {
  }

}
