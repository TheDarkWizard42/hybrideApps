import { Injectable } from '@angular/core';
import { Recept } from './recept';

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {
  private recepten: Recept[] = [
    {
      id: "1",
      img: "https://static.gva.be/Assets/Images_Upload/2019/10/18/90519baa-f0e2-11e9-a3e4-fd8071a5979c.jpg?width=1152&format=jpg",
      naam: "spaghetti",
      ingredienten: "tomaten, ajuin, pasta"
    },
    {
      id: "2",
      img: "http://www.pizzamaken.net/wp-content/uploads/2016/10/pizza-recept-ananas-hawai.jpg",
      naam: "Pizza Hawaii",
      ingredienten: "mozarella, tomatensaus, ananas, Hesp"
    }
  ];

  constructor() { }
  getRecepten(): Recept[] {
    return this.recepten;
  }
  getRecept(id: string): Recept {
    return this.recepten.find(x => x.id === id)
  }
  deleteRecept(id: string): void {
    this.recepten = this.recepten.filter(x => x.id !== id);
  }
  addRecept(recept: Recept) {
    //bepalen maxID
    let maxid = 0;
    this.recepten.map(
      recept => {
        if (parseInt(recept.id) > maxid) {
          maxid = parseInt(recept.id);
        }
      }
    );
    //id+1
    maxid++;
    recept.id = maxid.toString();
    this.recepten.push(recept);
  }
  updateRecept(recept: Recept) {
    for (let index in this.recepten) {
      if (this.recepten[index].id == recept.id) {
        this.recepten[index] = recept;
        break;
      }
    }
  }
}
