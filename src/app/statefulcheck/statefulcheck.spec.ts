import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statefulcheck } from './statefulcheck';

describe('Statefulcheck', () => {
  let component: Statefulcheck;
  let fixture: ComponentFixture<Statefulcheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statefulcheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statefulcheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
