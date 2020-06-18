import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultHeaderComponent } from '../components/default-header/default-header.component';
import { MenuHeaderComponent } from '../components/menu-header/menu-header.component';

@NgModule({
  imports : [IonicModule,FormsModule,CommonModule,RouterModule],
  declarations: [DefaultHeaderComponent, MenuHeaderComponent],
  exports:[DefaultHeaderComponent, MenuHeaderComponent]
})
export class GlobalModule { }
