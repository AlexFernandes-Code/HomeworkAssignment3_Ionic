import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupplierAddPageRoutingModule } from './supplier-add-routing.module';
import { SupplierAddPage } from './supplier-add.page';
import { GlobalModule } from 'src/app/global modules/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierAddPageRoutingModule,
    GlobalModule
  ],
  declarations: [SupplierAddPage]
})
export class SupplierAddPageModule {}
