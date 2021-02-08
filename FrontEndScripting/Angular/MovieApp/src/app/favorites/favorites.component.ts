import { Component, OnInit } from '@angular/core';
import { Movies } from '../Movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorieten: Movies[] = [];
  constructor(private movieservice: MoviesService) { }

  ngOnInit(): void {
    this.favorieten = this.movieservice.getFavorites();
  }

}
