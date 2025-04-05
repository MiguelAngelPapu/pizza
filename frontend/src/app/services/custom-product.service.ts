import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomProductService {
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
      sauce: null as number | null,
      choose: null as number | null,
    }
  };
  constructor() { }
}
