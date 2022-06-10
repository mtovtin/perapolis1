import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt9Component } from './gt9.component';

describe('Gt9Component', () => {
  let component: Gt9Component;
  let fixture: ComponentFixture<Gt9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
