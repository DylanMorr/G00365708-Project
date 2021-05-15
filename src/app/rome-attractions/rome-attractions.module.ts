import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomeAttractionsPageRoutingModule } from './rome-attractions-routing.module';

import { RomeAttractionsPage } from './rome-attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomeAttractionsPageRoutingModule
  ],
  declarations: [RomeAttractionsPage]
})
export class RomeAttractionsPageModule {}
