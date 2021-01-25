import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { KlantenComponent } from './klanten/klanten.component';
import { MainComponent } from './main/main.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { MedewerkerformComponent } from './medewerkerform/medewerkerform.component';

const routes: Routes = [
  { path: '', redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "medewerker", component: MedewerkerComponent },
  { path: "klanten", component: KlantenComponent },
  { path: "bestellingen", component: BestellingenComponent },
  { path: "medewerker/new", component: MedewerkerformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
