import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonegalPageRoutingModule } from './donegal-routing.module';

import { DonegalPage } from './donegal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonegalPageRoutingModule
  ],
  declarations: [DonegalPage]
})
export class DonegalPageModule {}
