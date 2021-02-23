import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalerijPage } from './galerij.page';

const routes: Routes = [
  {
    path: '',
    component: GalerijPage
  },
  {
    path: 'galerijfoto/:id',
    loadChildren: () => import('./galerijfoto/galerijfoto.module').then( m => m.GalerijfotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalerijPageRoutingModule {}
