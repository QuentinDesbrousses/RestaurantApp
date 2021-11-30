import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFicheComponent } from './creation-fiche.component';

describe('CreationFicheComponent', () => {
  let component: CreationFicheComponent;
  let fixture: ComponentFixture<CreationFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
