import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcomponent } from './about';

describe('About', () => {
  let component: Aboutcomponent;
  let fixture: ComponentFixture<Aboutcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
