import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.toon();
  }
  title = 'boodschappenlijst';
  product: string = "";
  producten: string[] = [];

  toon() {
    if (localStorage.getItem("producten") != null) {
      this.producten = JSON.parse(localStorage.getItem("producten"));
    }
  }
  opslaan() {
    this.producten.push(this.product);
    localStorage.setItem("producten", JSON.stringify(this.producten));
    this.toon();
  }
  Leegmaken() {
    this.producten = [];
    localStorage.setItem("producten", JSON.stringify(this.producten));
  }
}
