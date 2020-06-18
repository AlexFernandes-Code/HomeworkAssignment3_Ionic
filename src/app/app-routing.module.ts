import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ManagerGuard } from './guards/manager.guard';
import { EmpGuard } from './guards/emp.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule),
    canActivate : [EmpGuard]   
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./pages/mainmenu/mainmenu.module').then( m => m.MainmenuPageModule) 
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate : [EmpGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule),
    canActivate : [ManagerGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule),
    canActivate : [EmpGuard]
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./pages/suppliers/suppliers.module').then( m => m.SuppliersPageModule),
    canActivate : [ManagerGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
