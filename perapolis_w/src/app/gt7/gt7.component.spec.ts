import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt7Component } from './gt7.component';

describe('Gt7Component', () => {
  let component: Gt7Component;
  let fixture: ComponentFixture<Gt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
