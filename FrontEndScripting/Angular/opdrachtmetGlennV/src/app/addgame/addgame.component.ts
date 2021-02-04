import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss']
})
export class AddgameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  addGame(naam:HTMLInputElement, prijs:HTMLInputElement, rating:HTMLInputElement, radio1:HTMLInputElement, radio2:HTMLInputElement, radio3:HTMLInputElement,text:HTMLTextAreaElement){
    let radiowaarde:number = 0;
    switch (true) {
      case radio1.checked: radiowaarde = 1;      
        break;
        case radio2.checked: radiowaarde =2      
          break;
          case radio3.checked: radiowaarde = 3       
            break;
      default:
        break;
    }
    this.gameService.addGame(naam.value, Number(prijs.value), Number(rating.value), radiowaarde, text.value).subscribe(data => {
      this.router.navigateByUrl("main")
    })
  }

  ngOnInit(): void {
  }

}
