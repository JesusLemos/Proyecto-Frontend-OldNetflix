import { TestBed } from '@angular/core/testing';

import { VerperfilService } from './verperfil.service';

describe('VerperfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerperfilService = TestBed.get(VerperfilService);
    expect(service).toBeTruthy();
  });
});
