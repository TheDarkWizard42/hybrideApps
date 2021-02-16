import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recept } from '../recept';
import { ReceptenService } from '../recepten.service';

@Component({
  selector: 'app-receptform',
  templateUrl: './receptform.page.html',
  styleUrls: ['./receptform.page.scss'],
})
export class ReceptformPage implements OnInit {
  recept: Recept;
  context: string = "insert";
  constructor(private activatedroute: ActivatedRoute, private receptenservice: ReceptenService, private router: Router) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        if (route.get('id') === "nieuw") {
          this.recept = new Recept("", "", "");
          this.context = "insert";
        }
        else {
          this.recept = this.receptenservice.getRecept(route.get('id'));
          this.context = "update";
        }
      }
    )
  }
  opslaan() {
    if (this.context == "insert") {
      this.receptenservice.addRecept(this.recept);
    }
    else {
      this.receptenservice.updateRecept(this.recept);
    }
    this.router.navigateByUrl('/recepten');
  }
}
