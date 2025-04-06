import { Injectable } from '@angular/core';
import { SizeProductService } from './size-product.service';
import { CrustProductService } from './crust-product.service';
import { ToppingProductService } from './topping-product.service';
import { SauceProductService } from './sauce-product.service';

@Injectable({
  providedIn: 'root'
})
export class CustomProductService {
  public selectParts: true | false = true;
  public customViews: 'create-pizza' | 'left-half' | 'right-half' = 'create-pizza';
  public page: 1 | 2 = 1;

  public custom = {
    size: 1 as number | null,
    crust: 1 as number | null,
    topping: 1 as number | null,
    'left-half': {
      sauce: 2 as number | null,
      choose: [1, 2]
    },
    'right-half': {
      sauce: 2 as number | null,
      choose: [1, 2]
    }
  };
  constructor(
    public sizeProductService: SizeProductService,
    public crustProductService: CrustProductService,
    public toppingProductService: ToppingProductService,
    public sauceProductService: SauceProductService
  ) { }
}
