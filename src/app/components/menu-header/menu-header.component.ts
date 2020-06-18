import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global services/global.service';
import { ToastService } from 'src/app/global services/toast.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  constructor(public service : GlobalService, public toast : ToastService) { }
 
  ngOnInit(){   
    this.service.isLoggedIn(this.service.User.GUID);
    this.service.getAPIStatus()
      }

      Logout(){
    this.service.Logout(this.service.User.GUID).then(value => 
      {
        if (this.service.User == null)     {
          this.toast.toastLogoutSucc();
        } 
        else {
          this.toast.toastLogoutUnsucc() 
        }   
      })
  }

  onClick(){
    this.service.Logout(this.service.User.GUID).then(value => 
      {
        if (this.service.User == null)     {
          this.toast.toastLogoutSucc();
        } 
        else {
          this.toast.toastLogoutUnsucc() 
        }   
      })
  }



}