import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupplierAddPage } from './supplier-add.page';

describe('SupplierAddPage', () => {
  let component: SupplierAddPage;
  let fixture: ComponentFixture<SupplierAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
