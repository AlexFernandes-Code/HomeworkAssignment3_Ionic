import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupplierUpdatePageRoutingModule } from './supplier-update-routing.module';
import { SupplierUpdatePage } from './supplier-update.page';
import { GlobalModule } from 'src/app/global modules/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierUpdatePageRoutingModule,
    GlobalModule
  ],
  declarations: [SupplierUpdatePage]
})
export class SupplierUpdatePageModule {}
