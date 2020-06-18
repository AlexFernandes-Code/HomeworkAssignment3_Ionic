import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr : ToastController, public service : GlobalService) { }

/*---------------------------------------------------------------------------------------------------------------------------------

                                                        Delete Messages 

-----------------------------------------------------------------------------------------------------------------------------------*/

async toastDeleteSucc() {
  const toast = await this.toastr.create({
    message: 'Item removed succesfully.',
    duration: 2000,
    position : 'bottom',
    color : 'success'
  });
  toast.present();
}
async toastDeleteUnsucc() {
  const toast = await this.toastr.create({
    message: 'Item was not removed succesfully. Please try again.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}

async toastDeleteUnsuccFK() {
  const toast = await this.toastr.create({
    message: 'Item has a reationship with another item. Please delete ensure the other item is deleted first',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}



/*---------------------------------------------------------------------------------------------------------------------------------

                                                        User Messages 

-----------------------------------------------------------------------------------------------------------------------------------*/

async toastLoginSucc() {
  const toast = await this.toastr.create({
    message: 'Login was successful.',
    duration: 2000,
    position : 'bottom',
    color : 'success'
  });
  toast.present();
}
async toastLoginUnsucc() {
  const toast = await this.toastr.create({
    message: 'Login was unsuccesfull. Please try again.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}

async toastAuthFailed() {
  const toast = await this.toastr.create({
    message: 'You do not have access to this.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}

async toastRelog() {
  const toast = await this.toastr.create({
    message: 'Please re-login.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}

async toastLogoutSucc() {
  const toast = await this.toastr.create({
    message: 'You are now logged out.',
    duration: 2000,
    position : 'bottom',
    color : 'warning'
  });
  toast.present();
}

async toastLogoutUnsucc() {
  const toast = await this.toastr.create({
    message: 'Logout failed. Please try again.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}

async toastRegisterSucc() {
  const toast = await this.toastr.create({
    message: 'Registeration was successful.',
    duration: 2000,
    position : 'bottom',
    color : 'success'
  });
  toast.present();
}

async toastRegisterUnsucc() {
  const toast = await this.toastr.create({
    message: 'Username is taken already.',
    duration: 2000,
    position : 'bottom',
    color : 'danger'
  });
  toast.present();
}




















}

