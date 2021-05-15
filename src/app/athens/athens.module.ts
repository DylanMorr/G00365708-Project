import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthensPageRoutingModule } from './athens-routing.module';

import { AthensPage } from './athens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthensPageRoutingModule
  ],
  declarations: [AthensPage]
})
export class AthensPageModule {}
