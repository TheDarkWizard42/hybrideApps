import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalerijfotoPageRoutingModule } from './galerijfoto-routing.module';

import { GalerijfotoPage } from './galerijfoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalerijfotoPageRoutingModule
  ],
  declarations: [GalerijfotoPage]
})
export class GalerijfotoPageModule {}
