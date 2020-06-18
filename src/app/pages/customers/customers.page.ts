import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { Customer } from '../../models/customer model/customer.model';
import { ToastService } from '../../global services/toast.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  

  constructor(public service: GlobalService, public toast: ToastService, public alertController: AlertController ){}

  ngOnInit() {
    this.service.GetCustomers(this.service.User.GUID)
  }  

  populateForm(obj: Customer) {
    this.service.formDataCustomer = Object.assign({}, obj);
  }

  filterList(event)
  {
    this.service.listSearchCustomer = this.service.listCustomer;
    const searchTerm = event.srcElement.value;
    if (!searchTerm)
    {
      return;
    }  
    this.service.listSearchCustomer = this.service.listSearchCustomer.filter(data=>
      {
        if (data.Name && searchTerm) 
          {
            if ((data.Name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.Surname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.Company.toLowerCase().indexOf(searchTerm.toLowerCase())>-1))
              {
                return true;
              }
            return false;
          }
      }
    )
  }



  async onDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete.',
      message: 'Are you sure you want to delete that customer?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.service.DeleteCustomer(id, this.service.User.GUID).then(res => {
              if (this.service.Dependence == true){       
                this.service.GetCustomers(this.service.User.GUID);
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
          cssClass: 'secondary'         
        } 
      ]
    });
    await alert.present();          
  }
}