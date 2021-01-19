import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movie;
  constructor() { }

  ngOnInit(): void {
  }

}
