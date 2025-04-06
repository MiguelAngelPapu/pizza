import { TestBed } from '@angular/core/testing';

import { ToppingProductService } from './topping-product.service';

describe('ToppingProductService', () => {
  let service: ToppingProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
