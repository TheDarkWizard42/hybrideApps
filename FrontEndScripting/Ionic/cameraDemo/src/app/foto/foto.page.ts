import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
import { FotoService } from '../foto.service';
const { Camera, Filesystem, Storage } = Plugins;
@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  base64data = "";
  naam="";
  constructor(private fs: FotoService,private router: Router) { }
  ngOnInit() {
  }

  async neemFoto() {
    const capturedPhoto = await Camera.getPhoto({
      //resultType: CameraResultType.Uri,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100
    });
    this.base64data = capturedPhoto.base64String;
    
  }
  opslaan(){
    this.fs.saveFoto(this.base64data,this.naam).subscribe(x => {this.router.navigateByUrl("/" )});
  }
}
