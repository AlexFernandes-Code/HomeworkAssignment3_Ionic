import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductAddPageRoutingModule } from './product-add-routing.module';
import { ProductAddPage } from './product-add.page';
import { GlobalModule } from 'src/app/global modules/global.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAddPageRoutingModule,
    GlobalModule
  ],
  declarations: [ProductAddPage]
})
export class ProductAddPageModule {}
