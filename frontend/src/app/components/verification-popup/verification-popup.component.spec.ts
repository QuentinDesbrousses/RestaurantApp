import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPopupComponent } from './verification-popup.component';

describe('VerificationPopupComponent', () => {
  let component: VerificationPopupComponent;
  let fixture: ComponentFixture<VerificationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
