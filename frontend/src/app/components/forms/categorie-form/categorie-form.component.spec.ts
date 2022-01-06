import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormComponent } from './categorie-form.component';

describe('CategorieFormComponent', () => {
  let component: CategorieFormComponent;
  let fixture: ComponentFixture<CategorieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
