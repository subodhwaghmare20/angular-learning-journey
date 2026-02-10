import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childlife } from './childlife';

describe('Childlife', () => {
  let component: Childlife;
  let fixture: ComponentFixture<Childlife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childlife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childlife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
