import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt11Component } from './gt11.component';

describe('Gt11Component', () => {
  let component: Gt11Component;
  let fixture: ComponentFixture<Gt11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
