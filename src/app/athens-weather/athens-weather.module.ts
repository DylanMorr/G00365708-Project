import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthensWeatherPageRoutingModule } from './athens-weather-routing.module';

import { AthensWeatherPage } from './athens-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthensWeatherPageRoutingModule
  ],
  declarations: [AthensWeatherPage]
})
export class AthensWeatherPageModule {}
