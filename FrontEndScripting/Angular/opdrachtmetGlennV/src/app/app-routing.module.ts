import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgameComponent } from './addgame/addgame.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'gamedetails/:id', component: GamedetailsComponent},
  { path: 'addgame', component: AddgameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
