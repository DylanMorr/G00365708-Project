import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonegalAttractionsPage } from './donegal-attractions.page';

const routes: Routes = [
  {
    path: '',
    component: DonegalAttractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonegalAttractionsPageRoutingModule {}
