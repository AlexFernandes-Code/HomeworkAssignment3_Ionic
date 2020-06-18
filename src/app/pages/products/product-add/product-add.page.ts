import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  constructor( public  service : GlobalService, private router : Router) { }

  ngOnInit()  {
    this.service.GetSuppliers(this.service.User.GUID);
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataProduct = {
      ProductID : null,
      Price : null,
      ProductName : null,
      Image : null,
      Quantity : null,
      SupplierID : null
    }
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

   insertRecord( form : NgForm){
     this.service.PostNewProduct(form.value, this.service.User.GUID).subscribe(res =>  {
      this.resetForm(form);     
      this.router.navigateByUrl('/products');
      this.service.GetProducts(this.service.User.GUID);
      this.service.GetSupplierProducts(this.service.User.GUID);
    });     
  }


  
}