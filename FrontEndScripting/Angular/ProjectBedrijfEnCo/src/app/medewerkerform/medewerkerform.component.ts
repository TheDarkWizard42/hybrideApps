import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medewerkerform',
  templateUrl: './medewerkerform.component.html',
  styleUrls: ['./medewerkerform.component.scss']
})
export class MedewerkerformComponent implements OnInit {
  name: string = "";
  email: string = "";
  afb: string = "";
  enabled: boolean = false;
  buttongeg: string = "Toon Gegevens";
  showclass = "hide";
  reset = false;

  public Toongegevens() {
    if (this.enabled) {
      this.enabled = false;
      this.buttongeg = "Toon Gegevens";
      this.showclass = "hide";
    }
    else {
      this.enabled = true;
      this.buttongeg = "Verberg Gegevens";
      this.showclass = "show";
    }
  }

  public Reset() {
    this.name = "";
    this.email = "";
    this.afb = "";
  }
  Resetknop() {
    if (this.name != "" || this.email != "" || this.afb != "") {
      return false;
    }
    else {
      return true;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
