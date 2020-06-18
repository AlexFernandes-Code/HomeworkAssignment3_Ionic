import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { ToastService } from '../../global services/toast.service';
import { AlertController } from '@ionic/angular';
import { Supplier } from '../../models/supplier model/supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  constructor(public service: GlobalService, public toast: ToastService, public alertController: AlertController ){}

  ngOnInit() {
    this.service.GetSuppliers(this.service.User.GUID)
  }

  populateForm(obj: Supplier) {
    this.service.formDataSupplier = Object.assign({}, obj);
  }

  filterList(event)
  {
    this.service.listSearchSupplier = this.service.listSupplier;
    const searchTerm = event.srcElement.value;
    if (!searchTerm)
    {
      return;
    }  
    this.service.listSearchSupplier = this.service.listSearchSupplier.filter(data=>
      {
        if (data.ContactPersonName && searchTerm) 
          {
            if ((data.ContactPersonName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.ContactPersonSurname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.ContactPersonEmail.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.ContactPersonCell.toLowerCase().indexOf(searchTerm.toLowerCase())>-1))
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
      message: 'Are you sure you want to delete that supplier?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.service.DeleteSupplier(id, this.service.User.GUID).then(res => {
              if (this.service.Dependence == true){       
                this.service.GetSuppliers(this.service.User.GUID);
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