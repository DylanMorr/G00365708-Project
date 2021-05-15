import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthensAttractionsPage } from './athens-attractions.page';

const routes: Routes = [
  {
    path: '',
    component: AthensAttractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthensAttractionsPageRoutingModule {}
