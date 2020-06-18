import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomerAddPageRoutingModule } from './customer-add-routing.module';
import { CustomerAddPage } from './customer-add.page';
import { GlobalModule } from 'src/app/global modules/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAddPageRoutingModule,
    GlobalModule
  ],
  declarations: [CustomerAddPage]
})
export class CustomerAddPageModule {}
