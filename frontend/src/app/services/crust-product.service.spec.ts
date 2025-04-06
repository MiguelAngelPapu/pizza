import { TestBed } from '@angular/core/testing';

import { CrustProductService } from './crust-product.service';

describe('CrustProductService', () => {
  let service: CrustProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrustProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
