import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global services/global.service';
import { ToastService } from '../../global services/toast.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  constructor(public service : GlobalService, public toast : ToastService) { }

  ngOnInit() {
  }

}
