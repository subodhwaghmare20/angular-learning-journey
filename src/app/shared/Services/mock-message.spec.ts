import { TestBed } from '@angular/core/testing';

import { MockMessage } from './mock-message';

describe('MockMessage', () => {
  let service: MockMessage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMessage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
