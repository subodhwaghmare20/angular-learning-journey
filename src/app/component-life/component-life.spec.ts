import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLife } from './component-life';

describe('ComponentLife', () => {
  let component: ComponentLife;
  let fixture: ComponentFixture<ComponentLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
