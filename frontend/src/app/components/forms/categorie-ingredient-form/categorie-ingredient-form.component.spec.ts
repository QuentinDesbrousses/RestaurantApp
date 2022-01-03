import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieIngredientFormComponent } from './categorie-ingredient-form.component';

describe('CategorieIngredientFormComponent', () => {
  let component: CategorieIngredientFormComponent;
  let fixture: ComponentFixture<CategorieIngredientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieIngredientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieIngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
