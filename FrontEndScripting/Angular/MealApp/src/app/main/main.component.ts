import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Meal } from '../meal';
import { MealapiService } from '../mealapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  meals: Meal[] = [];
  ingredienten: Ingredient[] = [];
  constructor(private mealapiservice: MealapiService) {
    this.mealapiservice.getIngredienten().subscribe(
      data =>
        this.ingredienten = data
    )
  }
  public toonIngredienten(gerecht: Meal) {
    let str: string = "";
    for (let index = 1; index < 20; index++) {
      if (gerecht['strIngredient' + index] != null && gerecht['strIngredient' + index] != "") {
        str += gerecht['strIngredient' + index] + " : " + gerecht['strMeasure' + index] + "\n";
      }
    }
    alert(str);
  }

  ngOnInit(): void {
  }
  zoeken(zoekterm: string, type: number) {
    this.mealapiservice.getGerechten(zoekterm, type).subscribe(data => this.meals = data)
  }

}
