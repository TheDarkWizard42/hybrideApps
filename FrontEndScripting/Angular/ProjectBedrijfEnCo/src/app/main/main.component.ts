import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public getal:number = 1
  constructor() {
      setInterval( ()=>{this.getal++}, 1000);
  }

  ngOnInit(): void {
  }

}
