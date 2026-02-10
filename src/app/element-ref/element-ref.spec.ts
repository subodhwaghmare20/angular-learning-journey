import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRef } from './element-ref';

describe('ElementRef', () => {
  let component: ElementRef;
  let fixture: ComponentFixture<ElementRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
