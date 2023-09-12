import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsigPage } from './detalle-asig.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsigPageRoutingModule {}
