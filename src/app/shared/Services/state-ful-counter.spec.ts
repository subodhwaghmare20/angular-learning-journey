import { TestBed } from '@angular/core/testing';

import { StateFulCounter } from './state-ful-counter';

describe('StateFulCounter', () => {
  let service: StateFulCounter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateFulCounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
