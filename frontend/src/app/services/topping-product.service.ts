import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToppingProductService {
  public toppingStyles = [
      { id: 1, name: 'Style 1', imageUrl: '/assets/img/topping-style.png', active: true },
      { id: 2, name: 'Style 2', imageUrl: '/assets/img/topping-style2.png' },
      // { id: 3, name: 'Style 3', imageUrl: '/assets/img/topping-style3.png'},
      // { id: 4, name: 'Style 4', imageUrl: '/assets/img/topping-style4.png'},
      // { id: 5, name: 'Style 5', imageUrl: '/assets/img/topping-style5.png'}
    ]
  constructor() { }
}
