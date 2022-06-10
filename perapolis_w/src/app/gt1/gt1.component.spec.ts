import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt1Component } from './gt1.component';

describe('Gt1Component', () => {
  let component: Gt1Component;
  let fixture: ComponentFixture<Gt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
