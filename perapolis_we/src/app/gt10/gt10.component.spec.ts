import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt10Component } from './gt10.component';

describe('Gt10Component', () => {
  let component: Gt10Component;
  let fixture: ComponentFixture<Gt10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
