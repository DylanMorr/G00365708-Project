import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthensAttractionsPageRoutingModule } from './athens-attractions-routing.module';

import { AthensAttractionsPage } from './athens-attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthensAttractionsPageRoutingModule
  ],
  declarations: [AthensAttractionsPage]
})
export class AthensAttractionsPageModule {}
