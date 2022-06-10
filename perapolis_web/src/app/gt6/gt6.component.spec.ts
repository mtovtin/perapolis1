import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt6Component } from './gt6.component';

describe('Gt6Component', () => {
  let component: Gt6Component;
  let fixture: ComponentFixture<Gt6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
