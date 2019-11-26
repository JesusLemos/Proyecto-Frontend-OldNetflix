import { TestBed } from '@angular/core/testing';

import { MostrarpeliculasService } from './mostrarpeliculas.service';

describe('MostrarpeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarpeliculasService = TestBed.get(MostrarpeliculasService);
    expect(service).toBeTruthy();
  });
});
