import { TestBed } from '@angular/core/testing';

import { DesconectarService } from './desconectar.service';

describe('DesconectarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesconectarService = TestBed.get(DesconectarService);
    expect(service).toBeTruthy();
  });
});
