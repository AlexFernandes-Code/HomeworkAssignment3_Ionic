import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { ToastService } from '../../global services/toast.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
DOB : string;
  constructor(public service : GlobalService, public toast : ToastService) { 
    this.DOB = this.service.User.DOB.toString();
  }

  ngOnInit() {
   
  }

  

}
