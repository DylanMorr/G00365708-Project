import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomeFlightsPage } from './rome-flights.page';

const routes: Routes = [
  {
    path: '',
    component: RomeFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomeFlightsPageRoutingModule {}
