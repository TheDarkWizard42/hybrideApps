import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-klantregistratie',
  templateUrl: './klantregistratie.component.html',
  styleUrls: ['./klantregistratie.component.scss']
})
export class KlantregistratieComponent implements OnInit {

  constructor(private klantservice: KlantService, private router: Router) { }

  ngOnInit(): void {
  }
  public addKlant(f: NgForm, naam: HTMLInputElement, plaats: HTMLInputElement, postcode: HTMLInputElement, straat: HTMLInputElement, voornaam: HTMLInputElement) {
    if (f.valid) {
      this.klantservice.addKlant(naam.value, plaats.value, Number(postcode.value), straat.value, voornaam.value).subscribe(data => {
        this.router.navigateByUrl('klanten');
      })
    } else {
      alert("Niet alle velden zijn ingevuld!");
    }
  }
}
