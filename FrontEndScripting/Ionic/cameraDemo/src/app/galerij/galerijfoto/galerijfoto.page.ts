import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Foto } from 'src/app/foto';
import { FotoService } from 'src/app/foto.service';

@Component({
  selector: 'app-galerijfoto',
  templateUrl: './galerijfoto.page.html',
  styleUrls: ['./galerijfoto.page.scss'],
})
export class GalerijfotoPage implements OnInit {
  galerijfoto: string;
  constructor(private fs: FotoService, private activatedroute: ActivatedRoute, private router: Router) { }
  foto: Foto = new Foto();
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        this.fs.getFoto(route.get('id')).subscribe(x => { this.foto = x });
      }
    );
  }
  delete() {
    this.activatedroute.paramMap.subscribe(
      (route: ParamMap) => {
        this.fs.deleteFoto(route.get('id')).subscribe(x=>this.router.navigateByUrl("/galerij"));
      }
    );
    
  }

}
