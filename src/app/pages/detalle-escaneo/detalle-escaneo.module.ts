import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEscaneoPageRoutingModule } from './detalle-escaneo-routing.module';

import { DetalleEscaneoPage } from './detalle-escaneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEscaneoPageRoutingModule
  ],
  declarations: [DetalleEscaneoPage]
})
export class DetalleEscaneoPageModule {}
