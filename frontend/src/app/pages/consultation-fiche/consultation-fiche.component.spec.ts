import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationFicheComponent } from './consultation-fiche.component';

describe('ConsultationFicheComponent', () => {
  let component: ConsultationFicheComponent;
  let fixture: ComponentFixture<ConsultationFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
