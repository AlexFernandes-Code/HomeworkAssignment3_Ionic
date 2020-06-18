import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersPage } from './customers.page';
import { EmpGuard } from '../../guards/emp.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
  },
  {
    path: 'customer-add',
    loadChildren: () => import('./customer-add/customer-add.module').then( m => m.CustomerAddPageModule),
    canActivate : [EmpGuard]
  },
  {
    path: 'customer-update',
    loadChildren: () => import('./customer-update/customer-update.module').then( m => m.CustomerUpdatePageModule),
    canActivate : [EmpGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersPageRoutingModule {}
