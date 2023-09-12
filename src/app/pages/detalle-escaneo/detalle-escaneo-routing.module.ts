import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEscaneoPage } from './detalle-escaneo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEscaneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEscaneoPageRoutingModule {}
