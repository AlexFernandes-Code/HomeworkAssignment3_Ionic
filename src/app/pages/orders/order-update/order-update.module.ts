import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderUpdatePageRoutingModule } from './order-update-routing.module';
import { OrderUpdatePage } from './order-update.page';
import { GlobalModule } from 'src/app/global modules/global.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderUpdatePageRoutingModule,
    GlobalModule
  ],
  declarations: [OrderUpdatePage]
})
export class OrderUpdatePageModule {}
