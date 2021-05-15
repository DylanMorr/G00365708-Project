import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonegalWeatherPage } from './donegal-weather.page';

const routes: Routes = [
  {
    path: '',
    component: DonegalWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonegalWeatherPageRoutingModule {}
