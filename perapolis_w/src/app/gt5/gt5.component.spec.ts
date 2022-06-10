import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt5Component } from './gt5.component';

describe('Gt5Component', () => {
  let component: Gt5Component;
  let fixture: ComponentFixture<Gt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
