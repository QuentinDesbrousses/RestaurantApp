import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieIngredientListComponent } from './categorie-ingredient-list.component';

describe('CategorieIngredientListComponent', () => {
  let component: CategorieIngredientListComponent;
  let fixture: ComponentFixture<CategorieIngredientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieIngredientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
