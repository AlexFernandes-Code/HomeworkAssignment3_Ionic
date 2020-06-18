import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { Order } from '../../models/order model/order.model';
import { ToastService } from '../../global services/toast.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {



  constructor(public service: GlobalService, public toast: ToastService, public alertController: AlertController){}

  ngOnInit() {
      this.service.GetOrders(this.service.User.GUID);          
  }

 

  populateForm(obj: Order) {
    this.service.formDataOrder = Object.assign({}, obj);
  }

  populateDetails(obj: Order) {
    this.service.formDataOrderDetails = Object.assign({}, obj);
  }


  filterList(event)
  {
    this.service.listSearchOrder = this.service.listOrder;
    const searchTerm = event.srcElement.value;
    if (!searchTerm)
    {
      return;
    }  
    this.service.listSearchOrder = this.service.listSearchOrder.filter(data=>
      {
        if (data.ProductName && searchTerm) 
          {
            if ((data.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.Customer.toLowerCase().indexOf(searchTerm.toLowerCase())>-1))
              {
                return true;
              }
            return false;
          }
      })
  }

  async onDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete.',
      message: 'Are you sure you want to delete that order?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.service.DeleteOrder(id, this.service.User.GUID).then(res => {
              if (this.service.Dependence == true){       
                this.service.GetOrders(this.service.User.GUID);
                this.toast.toastDeleteSucc();
              }
              if (this.service.Dependence == false){
               this.toast.toastDeleteUnsuccFK();
              }
             }); 
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        } 
      ]
    });
    await alert.present();          
  }
  }