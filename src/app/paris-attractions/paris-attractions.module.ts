import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParisAttractionsPageRoutingModule } from './paris-attractions-routing.module';

import { ParisAttractionsPage } from './paris-attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParisAttractionsPageRoutingModule
  ],
  declarations: [ParisAttractionsPage]
})
export class ParisAttractionsPageModule {}
