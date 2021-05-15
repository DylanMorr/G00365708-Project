import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParisWeatherPageRoutingModule } from './paris-weather-routing.module';

import { ParisWeatherPage } from './paris-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParisWeatherPageRoutingModule
  ],
  declarations: [ParisWeatherPage]
})
export class ParisWeatherPageModule {}
