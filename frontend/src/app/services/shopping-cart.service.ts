import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  protected url: string = 'http://192.168.1.94:5009/api/product';
  protected SHOP_KEY: string = 'shoppingCart';
  public shoppingCartData: any;

  constructor(
    private http: HttpClient
  ) { }

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
  public updateShoppingCartSummary() {
    const shoppingCartItems = this.localStorage;
    let count = 0;
    const totalPrice = shoppingCartItems.reduce((accumulator, item) => {
      // Si el producto no es personalizado, y se seleciono en la vista de productos
      count += item.amount;
      return accumulator + (item.price * item.amount);
     
    }, 0);
    this.shoppingCartData = { count, total: this.shoppingCartForPrice(totalPrice) };
  }
  public shoppingCartForPrice(total: number): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(total);
  }
  public findProductInLocalStorage(): Observable<any> {
    return this.http.post<any>(`${this.url}/shoppingCart`, {
      localStorage: JSON.stringify(this.localStorage)
    });
  }
}