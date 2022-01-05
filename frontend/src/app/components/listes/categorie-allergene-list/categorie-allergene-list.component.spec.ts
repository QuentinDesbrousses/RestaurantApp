import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAllergeneListComponent } from './categorie-allergene-list.component';

describe('CategorieAllergeneListComponent', () => {
  let component: CategorieAllergeneListComponent;
  let fixture: ComponentFixture<CategorieAllergeneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAllergeneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAllergeneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
