import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit {
  public game: Game
  constructor(private gameService:GameService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (route: ParamMap) => {
        this.gameService.getGame(route.get("id")).subscribe(data => {
          data['id'] = route.get('id');
          this.game = data;
        })
      }
    )
  }
  editGame(naam:HTMLInputElement, prijs:HTMLInputElement, rating:HTMLInputElement, radio1:HTMLInputElement, radio2:HTMLInputElement, radio3:HTMLInputElement,text:HTMLTextAreaElement, id:string){
    let radiowaarde:number = 0;
    switch (true) {
      case radio1.checked: radiowaarde = 1;      
        break;
        case radio2.checked: radiowaarde = 2;      
          break;
          case radio3.checked: radiowaarde = 3;    
            break;
      default:
        break;
    }
    this.gameService.editGame(naam.value, Number(prijs.value), Number(rating.value), radiowaarde, text.value, id).subscribe(data => {
      this.router.navigateByUrl("main")
    })
  }

}
