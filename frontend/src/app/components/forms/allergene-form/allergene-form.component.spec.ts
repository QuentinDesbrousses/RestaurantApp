import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergeneFormComponent } from './allergene-form.component';

describe('AllergeneFormComponent', () => {
  let component: AllergeneFormComponent;
  let fixture: ComponentFixture<AllergeneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergeneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergeneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
