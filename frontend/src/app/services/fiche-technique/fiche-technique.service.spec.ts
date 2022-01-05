import { TestBed } from '@angular/core/testing';

import { FicheTechniqueService } from './fiche-technique.service';

describe('FicheTechniqueService', () => {
  let service: FicheTechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheTechniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
