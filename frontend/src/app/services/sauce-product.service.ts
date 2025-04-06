import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SauceProductService {
  public sauces = [
      { id: 1, name: 'BBQ'},
      { id: 2, name: 'Tomate', active: true },
      { id: 3, name: 'Hierba de ajo'}
    ];
  constructor() { }
}
