import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderAddPageRoutingModule } from './order-add-routing.module';
import { OrderAddPage } from './order-add.page';
import { GlobalModule } from 'src/app/global modules/global.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderAddPageRoutingModule,
    GlobalModule
  ],
  declarations: [OrderAddPage]
})
export class OrderAddPageModule {}
