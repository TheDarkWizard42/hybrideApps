import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public games: Game[] = [];
  constructor(private gameService:GameService, private router:Router) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data
    })
  }

  editGame(id:string){
    this.router.navigateByUrl("gamedetails/"+ id);
  }

  addGame(){
    this.router.navigateByUrl("addgame")
  }
  wissen(id:string){
    this.gameService.wissen(id).subscribe(data => {
      this.gameService.getGames().subscribe(data => {
        this.games = data
      })
    })
  }

}
