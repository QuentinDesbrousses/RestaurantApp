import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFormComponent } from './fiche-form.component';

describe('FicheFormComponent', () => {
  let component: FicheFormComponent;
  let fixture: ComponentFixture<FicheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
