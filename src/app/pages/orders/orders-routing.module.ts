import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPage } from './orders.page';
import { EmpGuard } from '../../guards/emp.guard';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  },
  {
    path: 'order-add',
    loadChildren: () => import('./order-add/order-add.module').then( m => m.OrderAddPageModule),
    canActivate : [EmpGuard]
  },
  {
    path: 'order-update',
    loadChildren: () => import('./order-update/order-update.module').then( m => m.OrderUpdatePageModule),
    canActivate : [EmpGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
