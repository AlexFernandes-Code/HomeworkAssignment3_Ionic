import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { ManagerGuard } from '../../guards/manager.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'product-add',
    loadChildren: () => import('../products/product-add/product-add.module').then( m => m.ProductAddPageModule),
    canActivate : [ManagerGuard]
  },
  {
    path: 'product-update',
    loadChildren: () => import('../products/product-update/product-update.module').then( m => m.ProductUpdatePageModule),
    canActivate : [ManagerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
