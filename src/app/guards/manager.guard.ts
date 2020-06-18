import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GlobalService } from '../global services/global.service';
import { ToastService } from '../global services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor (public service : GlobalService,  public toast : ToastService){}

 
   canActivate() {    
    this.service.isLoggedIn(this.service.User.GUID);
    if (this.service.LoggedIn == true)
    {
    if (this.service.User.TypeID == 2 )
      return true;
      else{
        this.toast.toastAuthFailed();
        return false;   
    }
  }
  else{
    this.toast.toastRelog();
    return false;   
  }
  }
  
}

