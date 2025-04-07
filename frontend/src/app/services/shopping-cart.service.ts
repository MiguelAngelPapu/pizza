import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  protected SHOP_KEY: string = 'shoppingCart';
  public shoppingCartData: any;

  constructor() {
    this.updateShoppingCartSummary();
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
  updateShoppingCartSummary() {
    const shoppingCartItems = this.localStorage;
    const totalPrice = shoppingCartItems.reduce((accumulator, item) => {
      // Si el producto no es personalizado, y se seleciono en la vista de productos
      return accumulator + (item.price * item.amount);
     
    }, 0);
    this.shoppingCartData = { count: shoppingCartItems.length, total: this.shoppingCartForPrice(totalPrice) };
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