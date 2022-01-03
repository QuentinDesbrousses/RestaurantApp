import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergeneListComponent } from './allergene-list.component';

describe('AllergeneListComponent', () => {
  let component: AllergeneListComponent;
  let fixture: ComponentFixture<AllergeneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergeneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergeneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
