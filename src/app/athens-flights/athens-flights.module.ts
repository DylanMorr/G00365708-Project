import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthensFlightsPageRoutingModule } from './athens-flights-routing.module';

import { AthensFlightsPage } from './athens-flights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthensFlightsPageRoutingModule
  ],
  declarations: [AthensFlightsPage]
})
export class AthensFlightsPageModule {}
