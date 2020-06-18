import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.page.html',
  styleUrls: ['./order-add.page.scss'],
})
export class OrderAddPage implements OnInit {

  constructor( public  service : GlobalService, private router : Router) { }
  
  ngOnInit()  {
    this.resetForm();
    this.service.GetCustomers(this.service.User.GUID);
    this.service.GetUsers(this.service.User.GUID);
    this.service.GetProducts(this.service.User.GUID);
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataOrder = {
      OrderID : null,
      OrderDate :  new Date(),
      UserID : null,
      ProductID : null,
      CustomerID : null,    
      Customer : null,
      User : null,
      ProductName: null,
      ProductPrice: null,
      Quantity: null
    }
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord( form : NgForm){
    this.service.PostNewOrder(form.value,this.service.User.GUID).subscribe(res =>  {      
      this.resetForm(form);
      this.router.navigateByUrl('/orders');
      this.service.GetOrders(this.service.User.GUID);
    })
  } 
}
