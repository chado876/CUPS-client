import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSigninComponent } from './manager-signin.component';

describe('ManagerSigninComponent', () => {
  let component: ManagerSigninComponent;
  let fixture: ComponentFixture<ManagerSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
