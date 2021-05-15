import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomeAttractionsPage } from './rome-attractions.page';

const routes: Routes = [
  {
    path: '',
    component: RomeAttractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomeAttractionsPageRoutingModule {}
