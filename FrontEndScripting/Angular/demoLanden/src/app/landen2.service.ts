import { Injectable } from '@angular/core';
import { Land } from './land';

@Injectable({
  providedIn: 'root'
})
export class LandenService {
  public landen: Land[] = [];

  constructor() {

  }
  public getLanden(): Land[] {
    if (localStorage.getItem("landen") != null) {
      this.landen = JSON.parse(localStorage.getItem("landen"));
      return this.landen;

    }
  }
  public addLand(l: Land) {
    this.landen.push(l);
    localStorage.setItem("landen", JSON.stringify(this.landen));
  }
}
