import { TestBed } from '@angular/core/testing';

import { ChooseToppingsService } from './choose-toppings.service';

describe('ChooseToppingsService', () => {
  let service: ChooseToppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseToppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
