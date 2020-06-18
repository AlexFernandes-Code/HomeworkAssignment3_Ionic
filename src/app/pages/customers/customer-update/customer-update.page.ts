import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.page.html',
  styleUrls: ['./customer-update.page.scss'],
})
export class CustomerUpdatePage implements OnInit {

  constructor(public service: GlobalService, private router : Router){}

  ngOnInit() :void  {

  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataCustomer = {
      CustomerID : null,
      Name : null,
      Surname : null,
      Company : null,
      Cell : null,
    }
  }

  
  onSubmit(form : NgForm){

     this.updateRecord(form);
  }


  updateRecord(form: NgForm) {    
     this.service.UpdateCustomer(form.value, this.service.User.GUID).subscribe(res => {     
      this.resetForm(form);
      this.router.navigateByUrl('/customers');
      this.service.GetCustomers(this.service.User.GUID); }    
    );    
  }  
    
}