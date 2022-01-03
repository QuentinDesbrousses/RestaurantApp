import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeListComponent } from './etape-list.component';

describe('EtapeListComponent', () => {
  let component: EtapeListComponent;
  let fixture: ComponentFixture<EtapeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
