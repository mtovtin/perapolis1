import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosuereComponent } from './posuere.component';

describe('PosuereComponent', () => {
  let component: PosuereComponent;
  let fixture: ComponentFixture<PosuereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosuereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosuereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
