import { TestBed } from '@angular/core/testing';

import { LoggerServices } from './logger.services';

describe('LoggerServices', () => {
  let service: LoggerServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
