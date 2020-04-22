import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeanimationComponent } from './coffeeanimation.component';

describe('CoffeeanimationComponent', () => {
  let component: CoffeeanimationComponent;
  let fixture: ComponentFixture<CoffeeanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
