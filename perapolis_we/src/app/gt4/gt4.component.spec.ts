import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt4Component } from './gt4.component';

describe('Gt4Component', () => {
  let component: Gt4Component;
  let fixture: ComponentFixture<Gt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
