import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.page.html',
  styleUrls: ['./supplier-update.page.scss'],
})
export class SupplierUpdatePage implements OnInit {

  constructor(public service: GlobalService, private router : Router){}

  ngOnInit() :void  {
   
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataSupplier = {
      SupplierID : null,
      SupplierName : null,
      ContactPersonName : null,
      ContactPersonSurname : null,
      ContactPersonEmail : null,
      ContactPersonCell : null
    }
  }

  
  onSubmit(form : NgForm){

     this.updateRecord(form);
  }


  updateRecord(form: NgForm) {    
     this.service.UpdateSupplier(form.value, this.service.User.GUID).subscribe(res => {     
      this.resetForm(form);
      this.router.navigateByUrl('/suppliers');
      this.service.GetSuppliers(this.service.User.GUID); }    
    );    
  }  
    
}