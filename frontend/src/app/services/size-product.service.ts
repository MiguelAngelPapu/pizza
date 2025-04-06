import { Injectable } from '@angular/core';

interface Size {
  id: number;
  name: string;
  sliceArea: number;
  slices: number;
  price: number;
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SizeProductService {
  public sizes = [
    { id: 1, name: 'Personal', sliceArea: 62.2, slices: 4, price: 11900, active: false },
    { id: 2, name: 'Mediana', sliceArea: 76.4, slices: 6, price: 25900, active: false },
    { id: 3, name: 'Grande', sliceArea: 83.2, slices: 8, price: 35900, active: false },
    { id: 4, name: 'Familiar', sliceArea: 92.1, slices: 10, price: 50900, active: false }
  ];
  constructor() { 
    
  }
  public sizeView(size: Size ): string{
    return `${size.sliceArea} cm² x ${size.slices}`;
  }
  public sizeForPrice(size: Size): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(size.price);
  }
}