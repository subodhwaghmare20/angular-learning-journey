import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPAPI } from './http-api';

describe('HTTPAPI', () => {
  let component: HTTPAPI;
  let fixture: ComponentFixture<HTTPAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HTTPAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTTPAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
