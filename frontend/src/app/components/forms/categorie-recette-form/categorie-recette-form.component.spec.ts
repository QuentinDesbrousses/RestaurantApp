import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieRecetteFormComponent } from './categorie-recette-form.component';

describe('CategorieRecetteFormComponent', () => {
  let component: CategorieRecetteFormComponent;
  let fixture: ComponentFixture<CategorieRecetteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieRecetteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieRecetteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
