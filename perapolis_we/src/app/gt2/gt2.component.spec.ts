import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt2Component } from './gt2.component';

describe('Gt2Component', () => {
  let component: Gt2Component;
  let fixture: ComponentFixture<Gt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
