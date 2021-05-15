import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomeWeatherPageRoutingModule } from './rome-weather-routing.module';

import { RomeWeatherPage } from './rome-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomeWeatherPageRoutingModule
  ],
  declarations: [RomeWeatherPage]
})
export class RomeWeatherPageModule {}
