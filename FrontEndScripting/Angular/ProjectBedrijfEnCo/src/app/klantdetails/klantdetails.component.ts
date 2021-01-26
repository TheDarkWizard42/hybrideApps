import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-klantdetails',
  templateUrl: './klantdetails.component.html',
  styleUrls: ['./klantdetails.component.scss']
})
export class KlantdetailsComponent implements OnInit {
  public id: string;
  public klant: Klant;
  constructor(private activatedroute: ActivatedRoute, private klantservice: KlantService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        this.klantservice.getklant(route.get('id'))
        .subscribe(data => { this.klant = data; })
      }
    )
  }

}
