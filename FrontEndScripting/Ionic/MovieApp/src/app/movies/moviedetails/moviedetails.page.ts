import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  constructor(private movieservice: MovieService, private activatedroute: ActivatedRoute) { }
  movie: Movie = new Movie("", "", "");
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        this.movieservice.getPlot(route.get('id')).subscribe(x => { this.movie=x});
      }
    );
  }

}
