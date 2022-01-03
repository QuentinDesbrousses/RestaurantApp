import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieRecetteListComponent } from './categorie-recette-list.component';

describe('CategorieRecetteListComponent', () => {
  let component: CategorieRecetteListComponent;
  let fixture: ComponentFixture<CategorieRecetteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieRecetteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieRecetteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
