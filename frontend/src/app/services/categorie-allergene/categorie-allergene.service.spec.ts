import { TestBed } from '@angular/core/testing';

import { CategorieAllergeneService } from './categorie-allergene.service';

describe('CategorieAllergeneService', () => {
  let service: CategorieAllergeneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieAllergeneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
