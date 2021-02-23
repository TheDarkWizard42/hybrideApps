import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  seconden: number = 10;
  savedsec: number = 10;
  percentage: number = 0;
  timer: any;
  constructor() { }
  setSeconds(sec) {
    this.seconden = Number(sec);
    this.savedsec = Number(sec);
    this.reset();
  }
  starttimer() {
    if (this.seconden == 0) {
      this.seconden = this.savedsec;
    }
    this.timer = setInterval(
      () => {
        this.seconden--;
        this.percentage = 100 - (this.seconden / this.savedsec * 100);
        if (this.seconden == 0) {
          clearInterval(this.timer);
          let audio = new Audio("assets/music/smb3_coin.wav");
          audio.play();
        }
      }, 1000
    );
  }
  pauzeertimer() {
    this.timer = clearInterval(this.timer);
  }
  reset() {
    this.timer = clearInterval(this.timer);
    this.seconden = this.savedsec;
    this.percentage = 100 - (this.seconden / 10 * 100);
  }
}
