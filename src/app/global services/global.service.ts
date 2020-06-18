import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Customer } from '../models/customer model/customer.model';
import { User } from '../models/user model/user.model';
import { Usertype } from '../models/user type model/usertype.model';
import { Product } from '../models/product model/product.model';
import { Order } from '../models/order model/order.model';
import { Gender } from '../models/gender model/gender.model';
import { Title } from '../models/title model/title.model';
import { Supplier } from '../models/supplier model/supplier.model';
import { SupplierProduct } from '../models/supplier-product model/supplier-product.model';



@Injectable({
  providedIn: 'root'
})
export class GlobalService
 {
 /* readonly URL = "http://192.168.1.97/HomeworkAssignment1_17039917/api"  */
  readonly URL = "http://localhost:59623/api" 
    constructor(private http : HttpClient) { }  

    /*---------------------------------------------------------------------------------------------------------------------------------

                                                                    Customers

    -----------------------------------------------------------------------------------------------------------------------------------*/
    formDataCustomer : Customer;
    listCustomer : Customer[];  
    listSearchCustomer : Customer[];

    PostNewCustomer(formDataCustomer : Customer, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
        return this.http.post(this.URL + '/PostNewCustomer/', formDataCustomer, {params:myPar});
    }

    GetCustomers(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getCustomers', {params:myPar}).toPromise().then(res=> this.listSearchCustomer  = res as Customer[])
      .then(data => this.listCustomer  = data as Customer[])
    }

    UpdateCustomer(formDataCustomer : Customer, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.put(this.URL+'/UpdateCustomer/'+formDataCustomer.CustomerID,formDataCustomer,{params:myPar});
    }

 

    Dependence : boolean;
    DeleteCustomer(id : number, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.delete(this.URL+'/DeleteCustomer/'+id,{params:myPar}).toPromise().then(res=> this.Dependence = res as boolean);
    }

     
    /*---------------------------------------------------------------------------------------------------------------------------------

                                                                 Products

    -----------------------------------------------------------------------------------------------------------------------------------*/
    formDataProduct : Product;
    listProduct : Product[];
    listSearchProduct : Product[];

    PostNewProduct(formDataProduct : Product, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.post(this.URL + '/PostNewProduct/', formDataProduct, {params:myPar});
    }

    GetProducts(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getProducts', {params:myPar}).toPromise().then(res=> this.listSearchProduct = res as Product[])
      .then(data => this.listProduct = data as Product[]);
    }

    UpdateProduct(formDataProduct : Product, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.put(this.URL+'/UpdateProduct/'+formDataProduct.ProductID,formDataProduct, {params:myPar});
    }

    DeleteProduct(id : number, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.delete(this.URL+'/DeleteProduct/'+id, {params:myPar}).toPromise().then(res=> this.Dependence = res as boolean);
    }

    /*---------------------------------------------------------------------------------------------------------------------------------

                                                                 Suppliers

    -----------------------------------------------------------------------------------------------------------------------------------*/
    formDataSupplier : Supplier;
    listSupplier : Supplier[];
    listSearchSupplier : Supplier[];
    listSupplierProduct : SupplierProduct[];
    listSearchSupplierProduct : SupplierProduct[];

    PostNewSupplier(formDataSupplier : Product, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.post(this.URL + '/PostNewSupplier/', formDataSupplier, {params:myPar});
    }

    GetSuppliers(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getSuppliers', {params:myPar}).toPromise().then(res=> this.listSearchSupplier = res as Supplier[])
      .then(data => this.listSupplier = data as Supplier[]);
    }

    GetSupplierProducts(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getSupplierProducts', {params:myPar}).toPromise().then(res=> this.listSearchSupplierProduct = res as SupplierProduct[])
      .then(data => this.listSupplierProduct = data as SupplierProduct[]);
    }

    UpdateSupplier(formDataSupplier : Supplier, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.put(this.URL+'/UpdateSupplier/'+formDataSupplier.SupplierID,formDataSupplier, {params:myPar});
    }

    DeleteSupplier(id : number, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.delete(this.URL+'/DeleteSupplier/'+id, {params:myPar}).toPromise().then(res=> this.Dependence = res as boolean);
    }


/*---------------------------------------------------------------------------------------------------------------------------------

                                                                Orders

    -----------------------------------------------------------------------------------------------------------------------------------*/
    formDataOrder : Order;
    formDataOrderDetails : Order;
    listOrder : Order[];
    listSearchOrder : Order[];

    PostNewOrder(formDataOrder : Order, guid : string)
    {
        let myPar = new HttpParams().set('guid',guid);
        return this.http.post(this.URL + '/PostNewOrder/', formDataOrder, {params:myPar});
    }

    GetOrders(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getOrders', {params:myPar}).toPromise().then(res=> this.listSearchOrder = res as Order[])
      .then(data => this.listOrder = data as Order[]);
    }

    UpdateOrder(formDataOrder : Order, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.put(this.URL+'/UpdateOrder/'+formDataOrder.OrderID,formDataOrder, {params:myPar});
    }

    DeleteOrder(id : number, guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.delete(this.URL+'/DeleteOrder/'+id, {params:myPar}).toPromise().then(res=> this.Dependence = res as boolean);
    }

    GetDate()
    {
    return (new Date()).toISOString();
    }


    listUser: User[];
    GetUsers(guid : string)
    {
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/getUsers', {params:myPar}).toPromise().then(res=> this.listUser = res as User[]);
    }


 

    /*---------------------------------------------------------------------------------------------------------------------------------

                                                        User Access 

    -----------------------------------------------------------------------------------------------------------------------------------*/
    Status : boolean;

    getAPIStatus() 
    {             
       return  this.http.get(this.URL + '/getStatus').toPromise().then(data=> this.Status = data as boolean);    
    } 
  
    formDataLogin : User;
    User : User   
    UserInfo : User   

     Login(formDataLogin : User) 
    {             
       return  this.http.post<User>(this.URL + '/Login/', formDataLogin).toPromise().then(data=> this.User = data as User);    
    } 

    Logout(guid)
    {
        let myPar = new HttpParams().set('guid',guid);
        return this.http.get(this.URL + '/Logout/',{params:myPar}).toPromise().then(res => this.User = res as User);
    }

    LoggedIn : boolean;

    isLoggedIn( guid : string) 
    {   
      let myPar = new HttpParams().set('guid',guid);
      this.http.get(this.URL + '/isLoggedIn/', {params:myPar}).toPromise().then(res=> this.LoggedIn = res as boolean);
    }

 
    listUserTypes : Usertype[];

    GetUserTypes(){
      this.http.get(this.URL + '/getUserTypes').toPromise().then(res=> this.listUserTypes = res as Usertype[]);
    }

    listGender : Gender[];

    GetGender(){
      this.http.get(this.URL + '/getGender').toPromise().then(res=> this.listGender = res as Gender[]);
    }


    listTitles : Title[];

    GetTitles(){
      this.http.get(this.URL + '/getTitle').toPromise().then(res=> this.listTitles = res as Title[]);
    }


    formDataRegister : User;
    RegisterStatus: boolean;

    Register(formDataRegister : User)
    {
        return this.http.post(this.URL + '/Register/', formDataRegister).toPromise().then(res=> this.RegisterStatus = res as boolean);
    }


    logo = "https://cdn.discordapp.com/attachments/681909743073230954/702303912186740896/logo2.png"

}

