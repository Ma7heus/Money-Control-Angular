import { TestBed } from '@angular/core/testing';

import { ExtratoServiceService } from './extrato-service.service';

describe('ExtratoServiceService', () => {
  let service: ExtratoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtratoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
