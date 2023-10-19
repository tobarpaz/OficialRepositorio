import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmQRPageRoutingModule } from './confirm-qr-routing.module';

import { ConfirmQRPage } from './confirm-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmQRPageRoutingModule
  ],
  declarations: [ConfirmQRPage]
})
export class ConfirmQRPageModule {}
