import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsigPageRoutingModule } from './detalle-asig-routing.module';

import { DetalleAsigPage } from './detalle-asig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsigPageRoutingModule
  ],
  declarations: [DetalleAsigPage]
})
export class DetalleAsigPageModule {}
