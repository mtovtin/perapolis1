import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt3Component } from './gt3.component';

describe('Gt3Component', () => {
  let component: Gt3Component;
  let fixture: ComponentFixture<Gt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
