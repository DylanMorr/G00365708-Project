import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonegalFlightsPageRoutingModule } from './donegal-flights-routing.module';

import { DonegalFlightsPage } from './donegal-flights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonegalFlightsPageRoutingModule
  ],
  declarations: [DonegalFlightsPage]
})
export class DonegalFlightsPageModule {}
