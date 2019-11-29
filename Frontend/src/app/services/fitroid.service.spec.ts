import { TestBed } from '@angular/core/testing';

import { FiltroidService } from './filtroid.service';

describe('FiltroidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltroidService = TestBed.get(FiltroidService);
    expect(service).toBeTruthy();
  });
});
