import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAsigPage } from './registro-asig.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAsigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAsigPageRoutingModule {}
