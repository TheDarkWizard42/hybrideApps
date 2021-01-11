import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [` footer{background-color: #023047;
  color: white;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  position: fixed;
bottom: 0;}`]
})
export class FooterComponent implements OnInit {


  GetYear() {
    var datum = new Date;
    return datum.getFullYear();
  }
  ngOnInit(): void {
  }

}
