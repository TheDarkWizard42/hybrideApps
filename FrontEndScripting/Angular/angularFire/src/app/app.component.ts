import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Klant } from './klant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularFire';
  klanten: Klant[] = [];
  constructor(private af: AngularFireDatabase) { }
  ngOnInit(): void {
    let list = this.af.list<Klant>('Klanten');
    list.valueChanges().subscribe((x) => this.klanten = x);
  }


}
