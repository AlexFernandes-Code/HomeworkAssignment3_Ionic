import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersPage } from './suppliers.page';
import { ManagerGuard } from '../../guards/manager.guard';

const routes: Routes = [
  {
    path: '',
    component: SuppliersPage
  },
  {
    path: 'supplier-add',
    loadChildren: () => import('./supplier-add/supplier-add.module').then( m => m.SupplierAddPageModule),
    canActivate : [ManagerGuard]
  },
  {
    path: 'supplier-update',
    loadChildren: () => import('./supplier-update/supplier-update.module').then( m => m.SupplierUpdatePageModule),
    canActivate : [ManagerGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersPageRoutingModule {}
