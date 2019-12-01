import { TestBed } from '@angular/core/testing';

import { AlquilarpeliculasService } from './alquilarpeliculas.service';

describe('AlquilarpeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlquilarpeliculasService = TestBed.get(AlquilarpeliculasService);
    expect(service).toBeTruthy();
  });
});
