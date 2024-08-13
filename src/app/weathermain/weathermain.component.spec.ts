import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathermainComponent } from './weathermain.component';

describe('WeathermainComponent', () => {
  let component: WeathermainComponent;
  let fixture: ComponentFixture<WeathermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeathermainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeathermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
