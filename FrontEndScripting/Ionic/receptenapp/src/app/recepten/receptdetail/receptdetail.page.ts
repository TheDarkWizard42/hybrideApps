import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recept } from '../recept';
import { ReceptenService } from '../recepten.service';

@Component({
  selector: 'app-receptdetail',
  templateUrl: './receptdetail.page.html',
  styleUrls: ['./receptdetail.page.scss'],
})
export class ReceptdetailPage implements OnInit {
  recept: Recept;
  constructor(private receptenservice: ReceptenService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        this.recept = this.receptenservice.getRecept(route.get('id'));
      }
    )
  }
  onDelete(){
    this.receptenservice.deleteRecept(this.recept.id);
    this.router.navigateByUrl('/recepten');
  }

}
