import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  addGame(naam:string, prijs:number, rating:number, radio:number, text:string){
    let game: Game = new Game(naam, prijs, rating, radio, text);
    return this.http.post("https://pairprogramming-ad37c-default-rtdb.europe-west1.firebasedatabase.app/Games.json", game);
  }

  getGames(): Observable <Game[]> {
    return this.http.get<Game[]>("https://pairprogramming-ad37c-default-rtdb.europe-west1.firebasedatabase.app/Games.json").pipe(
      map(data => {
          let arr: Game[] = [];
          for (let x in data){
            let game: Game = new Game(data[x]['naam'], data[x]['prijs'], data[x]['rating'], data[x]['radio'], data[x]['text'], x)
            arr.push(game);
          }
          return arr;
      })
    );
  }
  getGame(id:string): Observable <Game> {
    return this.http.get<Game>("https://pairprogramming-ad37c-default-rtdb.europe-west1.firebasedatabase.app/Games/" +id + ".json")
  }
  editGame(naam:string, prijs:number, rating:number, radio:number, text:string, id:string){
    let game: Game = new Game(naam, prijs, rating, radio, text, id);
    return this.http.put("https://pairprogramming-ad37c-default-rtdb.europe-west1.firebasedatabase.app/Games/" + id + ".json", game);
  }
  wissen(id:string){
    return this.http.delete("https://pairprogramming-ad37c-default-rtdb.europe-west1.firebasedatabase.app/Games/" + id + ".json")
  }
}
