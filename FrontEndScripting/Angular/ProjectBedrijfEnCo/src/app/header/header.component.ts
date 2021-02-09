import { from } from "rxjs";
import { Component } from '@angular/core'
import { FilterService } from "../filter.service";
import { Router } from "@angular/router";

@Component(
  {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  }
)
export class HeaderComponent {
  constructor(private filterservice: FilterService, private router: Router) { }
  title = 'Jekyll & Hyde Inc';
  zoekterm(zoekterm: string) {
    this.filterservice.zoekterm = zoekterm;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl('/zoekresultaten')
    );
  }
}