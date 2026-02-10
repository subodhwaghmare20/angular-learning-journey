import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statechild3 } from './statechild3';

describe('Statechild3', () => {
  let component: Statechild3;
  let fixture: ComponentFixture<Statechild3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statechild3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statechild3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
