import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuppliersPageRoutingModule } from './suppliers-routing.module';
import { SuppliersPage } from './suppliers.page';
import { GlobalModule } from '../../global modules/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliersPageRoutingModule,
    GlobalModule    
  ],
  declarations: [SuppliersPage]
})
export class SuppliersPageModule {}
