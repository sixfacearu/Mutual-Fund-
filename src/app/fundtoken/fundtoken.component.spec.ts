import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtokenComponent } from './fundtoken.component';

describe('FundtokenComponent', () => {
  let component: FundtokenComponent;
  let fixture: ComponentFixture<FundtokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundtokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
