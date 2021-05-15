import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonegalPage } from './donegal.page';

const routes: Routes = [
  {
    path: '',
    component: DonegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonegalPageRoutingModule {}
