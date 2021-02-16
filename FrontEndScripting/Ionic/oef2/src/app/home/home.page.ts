import { Component, OnInit } from '@angular/core';
import { Gerecht } from '../gerecht';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
gerechten:Gerecht[]=[  { 
  image: 'https://barcamessi.files.wordpress.com/2014/11/spaghetti-with-tomato-sauce.jpg',
  name:'Spaghetti Bolognaise'
},
{ 
  image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg',
  name:'Megamix Big Burger'
}];
  constructor() {}
  ngOnInit(): void {
    
  }

}
