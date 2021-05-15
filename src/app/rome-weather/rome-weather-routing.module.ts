import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomeWeatherPage } from './rome-weather.page';

const routes: Routes = [
  {
    path: '',
    component: RomeWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomeWeatherPageRoutingModule {}
