import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasetokenComponent } from './purchasetoken.component';

describe('PurchasetokenComponent', () => {
  let component: PurchasetokenComponent;
  let fixture: ComponentFixture<PurchasetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
