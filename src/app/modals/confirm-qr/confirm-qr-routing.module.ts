import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmQRPage } from './confirm-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmQRPageRoutingModule {}
