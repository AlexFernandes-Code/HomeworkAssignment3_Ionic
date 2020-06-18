import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public service : GlobalService) { }


 ngOnInit() {
     this.service.getAPIStatus()
    }
  
  


}
