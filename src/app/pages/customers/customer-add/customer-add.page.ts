import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.page.html',
  styleUrls: ['./customer-add.page.scss'],
})
export class CustomerAddPage implements OnInit {

  constructor( public  service : GlobalService, private router : Router) { }

  ngOnInit()  {
    this.resetForm();
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
    this.insertRecord(form);
  }

   insertRecord( form : NgForm){
     this.service.PostNewCustomer(form.value, this.service.User.GUID).subscribe(res =>  {
      this.resetForm(form);     
      this.router.navigateByUrl('/customers');
      this.service.GetCustomers(this.service.User.GUID);
    });     
  }


  
}