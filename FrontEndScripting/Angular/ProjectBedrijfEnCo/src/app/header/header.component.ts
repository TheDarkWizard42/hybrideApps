import { from } from "rxjs";
import { Component } from '@angular/core'

@Component(
  {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  }
)
export class HeaderComponent {
  title = 'Jekyll & Hyde Inc';
}