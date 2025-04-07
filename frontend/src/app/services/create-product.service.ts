import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  protected SHOP_KEY: string = 'createProduct';
  public createProduct: any;

  constructor() {}

  set localStorage(value: object) {
    try {
      localStorage.setItem(this.SHOP_KEY, JSON.stringify(value));
      this.createProduct = value;
    } catch (error) {
      console.error(`Error guardando en localStorage con clave ${this.SHOP_KEY}`, error);
    }
  }
  get localStorage(): Array<any> {
    try {
      const data = localStorage.getItem(this.SHOP_KEY);
      this.createProduct = data ? JSON.parse(data) : [];
      return this.createProduct;
    } catch (error) {
      console.error(`Error leyendo de localStorage con clave ${this.SHOP_KEY}`, error);
      return [];
    }
  } 
  clearLocalStorage(): void {
    localStorage.removeItem(this.SHOP_KEY);
    this.createProduct = [];
  }
}
