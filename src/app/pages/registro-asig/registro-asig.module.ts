import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAsigPageRoutingModule } from './registro-asig-routing.module';

import { RegistroAsigPage } from './registro-asig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAsigPageRoutingModule
  ],
  declarations: [RegistroAsigPage]
})
export class RegistroAsigPageModule {}
