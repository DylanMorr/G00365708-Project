import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonegalFlightsPage } from './donegal-flights.page';

const routes: Routes = [
  {
    path: '',
    component: DonegalFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonegalFlightsPageRoutingModule {}
