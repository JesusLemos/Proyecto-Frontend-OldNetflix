import { TestBed } from '@angular/core/testing';

import { MostrarpopularesService } from './mostrarpopulares.service';

describe('MostrarpopularesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarpopularesService = TestBed.get(MostrarpopularesService);
    expect(service).toBeTruthy();
  });
});
