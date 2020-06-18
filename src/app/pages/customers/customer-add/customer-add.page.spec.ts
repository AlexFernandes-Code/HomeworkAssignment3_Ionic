import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerAddPage } from './customer-add.page';

describe('CustomerAddPage', () => {
  let component: CustomerAddPage;
  let fixture: ComponentFixture<CustomerAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
