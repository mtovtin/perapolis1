import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt8Component } from './gt8.component';

describe('Gt8Component', () => {
  let component: Gt8Component;
  let fixture: ComponentFixture<Gt8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
