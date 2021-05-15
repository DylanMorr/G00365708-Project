import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonegalWeatherPageRoutingModule } from './donegal-weather-routing.module';

import { DonegalWeatherPage } from './donegal-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonegalWeatherPageRoutingModule
  ],
  declarations: [DonegalWeatherPage]
})
export class DonegalWeatherPageModule {}
