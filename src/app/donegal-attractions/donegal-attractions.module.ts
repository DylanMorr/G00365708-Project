import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonegalAttractionsPageRoutingModule } from './donegal-attractions-routing.module';

import { DonegalAttractionsPage } from './donegal-attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonegalAttractionsPageRoutingModule
  ],
  declarations: [DonegalAttractionsPage]
})
export class DonegalAttractionsPageModule {}
