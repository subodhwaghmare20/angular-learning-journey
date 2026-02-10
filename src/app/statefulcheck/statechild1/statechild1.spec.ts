import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statechild1 } from './statechild1';

describe('Statechild1', () => {
  let component: Statechild1;
  let fixture: ComponentFixture<Statechild1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statechild1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statechild1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
