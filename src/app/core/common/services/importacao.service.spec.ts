import { TestBed } from '@angular/core/testing';

import { ImportacaoService } from './importacao.service';

describe('ImportacaoService', () => {
  let service: ImportacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
