import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthensFlightsPage } from './athens-flights.page';

const routes: Routes = [
  {
    path: '',
    component: AthensFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthensFlightsPageRoutingModule {}
