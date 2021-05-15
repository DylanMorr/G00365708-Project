import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthensWeatherPage } from './athens-weather.page';

const routes: Routes = [
  {
    path: '',
    component: AthensWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthensWeatherPageRoutingModule {}
