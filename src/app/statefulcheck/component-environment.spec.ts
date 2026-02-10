import { TestBed } from '@angular/core/testing';

import { ComponentEnvironment } from './component-environment';

describe('ComponentEnvironment', () => {
  let service: ComponentEnvironment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentEnvironment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
