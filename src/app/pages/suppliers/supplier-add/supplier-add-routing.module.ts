import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierAddPage } from './supplier-add.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierAddPageRoutingModule {}
