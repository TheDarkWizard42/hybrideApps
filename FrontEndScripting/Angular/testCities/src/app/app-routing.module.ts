import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LijstComponent } from './cities/lijst/lijst.component';
import { NieuwComponent } from './nieuw/nieuw.component';

const routes: Routes = [
  {path:'nieuw', component:NieuwComponent},
  {path:'', component:LijstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
