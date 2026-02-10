import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationChild } from './communication-child';

describe('CommunicationChild', () => {
  let component: CommunicationChild;
  let fixture: ComponentFixture<CommunicationChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
