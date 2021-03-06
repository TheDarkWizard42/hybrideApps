import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { KlantdetailsComponent } from './klantdetails/klantdetails.component';
import { KlantenComponent } from './klanten/klanten.component';
import { KlantregistratieComponent } from './klantregistratie/klantregistratie.component';
import { MainComponent } from './main/main.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { MedewerkerformComponent } from './medewerkerform/medewerkerform.component';
import { ZoekresultatenComponent } from './zoekresultaten/zoekresultaten.component';

const routes: Routes = [
  { path: '', redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "medewerker", component: MedewerkerComponent },
  { path: "klanten", component: KlantenComponent },
  { path: "bestellingen", component: BestellingenComponent },
  { path: "medewerker/new", component: MedewerkerformComponent },
  { path: "klant/new", component: KlantregistratieComponent },
  { path: "zoekresultaten", component: ZoekresultatenComponent },
  { path: "klanten/:id", component: KlantdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
