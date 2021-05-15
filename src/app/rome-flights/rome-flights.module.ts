import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomeFlightsPageRoutingModule } from './rome-flights-routing.module';

import { RomeFlightsPage } from './rome-flights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomeFlightsPageRoutingModule
  ],
  declarations: [RomeFlightsPage]
})
export class RomeFlightsPageModule {}
