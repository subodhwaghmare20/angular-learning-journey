import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statechild2 } from './statechild2';

describe('Statechild2', () => {
  let component: Statechild2;
  let fixture: ComponentFixture<Statechild2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statechild2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statechild2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
