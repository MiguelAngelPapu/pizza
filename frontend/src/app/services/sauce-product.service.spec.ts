import { TestBed } from '@angular/core/testing';

import { SauceProductService } from './sauce-product.service';

describe('SauceProductService', () => {
  let service: SauceProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SauceProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
