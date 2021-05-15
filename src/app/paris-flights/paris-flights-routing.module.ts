import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParisFlightsPage } from './paris-flights.page';

const routes: Routes = [
  {
    path: '',
    component: ParisFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParisFlightsPageRoutingModule {}
