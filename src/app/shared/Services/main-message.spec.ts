import { TestBed } from '@angular/core/testing';

import { MainMessage } from './main-message';

describe('MainMessage', () => {
  let service: MainMessage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainMessage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
