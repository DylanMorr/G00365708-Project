import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthensPage } from './athens.page';

const routes: Routes = [
  {
    path: '',
    component: AthensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthensPageRoutingModule {}
