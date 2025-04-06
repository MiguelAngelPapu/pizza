import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  protected SHOP_KEY: string = 'shoppingCart';
  public shoppingCartData: any;

  constructor() {
    this.findProductShoppingCart();
  }

  set localStorage(value: Array<any>) {
    try {
      localStorage.setItem(this.SHOP_KEY, JSON.stringify(value));
    } catch (error) {
      console.error(`Error guardando en localStorage con clave ${this.SHOP_KEY}`, error);
    }
  }
  get localStorage(): Array<any> {
    try {
      const cart = localStorage.getItem(this.SHOP_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error(`Error leyendo de localStorage con clave ${this.SHOP_KEY}`, error);
      return [];
    }
  }
  findProductShoppingCart(){
    if (this.localStorage.length) {
      const shopping = this.localStorage;
      // Calculate total price of the shopping cart
      let total = shopping.reduce((acc: number, item: any) => {
        return acc + (item.price || 0);
      }, 0);
      // Redondea a 2 decimales para evitar errores de punto flotante
      total = this.shoppingCartForPrice(Number(total));
      this.shoppingCartData = { count: this.localStorage.length, total };

    } else {
      this.shoppingCartData = { count: 0, total: 0 };
    }
  }
  public shoppingCartForPrice(total: number): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(total);
  }
}