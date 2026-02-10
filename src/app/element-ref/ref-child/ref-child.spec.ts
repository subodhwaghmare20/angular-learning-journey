import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefChild } from './ref-child';

describe('RefChild', () => {
  let component: RefChild;
  let fixture: ComponentFixture<RefChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
