import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { Product } from '../../models/product model/product.model';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/global services/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public service : GlobalService, public toast: ToastService, public alertController: AlertController ) { 
   
  }

  ngOnInit() {
    this.service.GetSupplierProducts(this.service.User.GUID);
    this.service.GetProducts(this.service.User.GUID);
  }

  populateForm(obj:Product ) {
    this.service.formDataProduct = Object.assign({}, obj);
  }

  async onDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete.',
      message: 'Are you sure you want to delete that product?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.service.DeleteProduct(id, this.service.User.GUID).then(res => {
              if (this.service.Dependence == true){       
                this.service.GetProducts(this.service.User.GUID);
                this.service.GetSupplierProducts(this.service.User.GUID);
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

  filterList(event)
  {
    this.service.listSearchSupplierProduct = this.service.listSupplierProduct;
    const searchTerm = event.srcElement.value;
    if (!searchTerm)
    {
      return;
    }  
    this.service.listSearchSupplierProduct = this.service.listSearchSupplierProduct.filter(data=>
      {
        if (data.ProductName && searchTerm) 
          {
            if ((data.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.SupplierName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
             || (data.ContactPersonCell.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.ContactPersonEmail.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
             || (data.ContactPersonName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1) || (data.ContactPersonSurname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1))
              {
                return true;
              }
            return false;
          }
      })
  }
  
  }