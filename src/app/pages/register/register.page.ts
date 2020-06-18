import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../global services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public service : GlobalService, private toast : ToastService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
    this.service.GetUserTypes();
    this.service.GetGender();
    this.service.GetTitles();
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.service.formDataRegister = {
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

  onRegister(form : NgForm){
    this.Register(form);    
  }

  Register( form : NgForm){
    this.service.Register(form.value).then(value => 
      {
        if (this.service.RegisterStatus != false){
          this.router.navigateByUrl('/login')
          this.toast.toastRegisterSucc();
          this.resetForm();    
        }
        else{
          this.router.navigateByUrl('/register')
          this.toast.toastRegisterUnsucc();
        }

      });          

    }
}
