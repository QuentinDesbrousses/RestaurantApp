import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAllergeneFormComponent } from './categorie-allergene-form.component';

describe('CategorieAllergeneFormComponent', () => {
  let component: CategorieAllergeneFormComponent;
  let fixture: ComponentFixture<CategorieAllergeneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAllergeneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAllergeneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
