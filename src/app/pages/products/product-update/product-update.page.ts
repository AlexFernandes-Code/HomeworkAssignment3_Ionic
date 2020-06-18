import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/global services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.page.html',
  styleUrls: ['./product-update.page.scss'],
})
export class ProductUpdatePage implements OnInit {

  constructor( public  service : GlobalService, private router : Router) { }

  ngOnInit() :void  {
    this.service.GetSuppliers(this.service.User.GUID);
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataProduct = {
      ProductID : null,
      ProductName : '',
      Price : null,
      Quantity : null,
      Image : null,       
      SupplierID : null
    }
  }

  onSubmit(form : NgForm){
     this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.service.UpdateProduct(form.value, this.service.User.GUID).subscribe(res => {      
      this.resetForm(form);
      this.router.navigateByUrl('/products');
      this.service.GetProducts(this.service.User.GUID);
      this.service.GetSupplierProducts(this.service.User.GUID);
    });
  
  }   
  }
