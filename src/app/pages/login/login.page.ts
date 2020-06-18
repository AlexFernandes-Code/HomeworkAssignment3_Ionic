import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../global services/global.service';
import { ToastService } from '../../global services/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public service : GlobalService,  public toast: ToastService, private router : Router ) {}

  ngOnInit() {
    this.resetForm();     
  }
  

  resetForm(form? : NgForm){

    if (form != null)
    form.resetForm();
    this.service.formDataLogin = {
      UserID : null,
      UserEmail : null,
      UserPassword :null,
      TypeID :null,         
      GUID : null,
      GUIDExpiry : null, 
      Name : null,
      Surname : null,
      DOB : null, 
      GenderID : null,
      TitleID : null
    }
  }

  onSubmit(form : NgForm){        
    this.Login(form);           
  }

  async Login(form : NgForm){
    await this.service.Login(form.value).then(value => 
    {
    if (this.service.User != null) {
      this.router.navigateByUrl('/intro');
      this.toast.toastLoginSucc();
      }
    else {
      this.toast.toastLoginUnsucc();
    }
    })
}
}
