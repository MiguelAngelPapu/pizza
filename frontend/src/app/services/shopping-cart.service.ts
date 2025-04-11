import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  protected url: string = 'http://192.168.1.94:5009/api/product';
  protected SHOP_KEY: string = 'shoppingCart';
  public shoppingCartData: any;
  public showShoppingCart: boolean = false;
  public productsFilter: any[] = [];

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
  localStorageRemoved(id: string): void {
    try {
      let cart = this.localStorage;
      this.localStorage = cart.filter(product => product.id !== id);
    } catch (error) {
      console.error(`Error leyendo de localStorage con clave ${this.SHOP_KEY}`, error);
    }
  }
  localStorageUpdateAmount(id: string, amount:number): void {
    try {
      let cart = this.localStorage;
      this.localStorage = cart.map(product => product.id == id ? { ...product, amount } : product);
    } catch (error) {
      console.error(`Error leyendo de localStorage con clave ${this.SHOP_KEY}`, error);
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
  public findProductInLocalStorage(): Observable<HttpResponse<any>> {    
    return this.http.post<any>(`${this.url}/shoppingCart`, {
      localStorage: this.localStorage
    },{ observe: 'response' });
  }
  public searchProductsPress(searchName:string): void {
    this.findProductInLocalStorage().subscribe(res => {
      const searchTerm = searchName.trim().toLowerCase();
      const allProducts = [...res.body];
      
      // Búsqueda en nombre, descripción, precio, cantidad, total y categoría
      this.productsFilter = allProducts.filter(product => {
        // Verificar que product y sus propiedades existen
        if (!product) return false;
        
        // Convertir campos a string para búsqueda de texto
        const name = product.name ? product.name.toLowerCase() : '';
        const description = product.description ? product.description.toLowerCase() : '';
        const price = product.price !== null ? product.price.toString() : '';
        const amount = product.amount !== null ? product.amount.toString() : '';
        const total = product.total !== null ? product.total.toString() : '';
        // Buscar en la categoría
        const categoryName = product.categories && product.categories[0] ? product.categories[0].name.toLowerCase() : '';
        
        // Buscar coincidencias en cualquier campo
        return name.includes(searchTerm) ||
           description.includes(searchTerm) ||
           price.includes(searchTerm) ||
           amount.includes(searchTerm) ||
           total.includes(searchTerm) ||
           categoryName.includes(searchTerm);
      });
      
      // Si no hay resultados y el término parece un número
      if (this.productsFilter.length === 0 && !isNaN(parseFloat(searchTerm))) {
        const searchNumber = parseFloat(searchTerm);
        
        this.productsFilter = allProducts.filter(product => {
          if (!product) return false;
          
          // Buscar coincidencias numéricas en campos relevantes
          return (product.price === searchNumber || product.price <= searchNumber) || 
             (product.amount === searchNumber || product.amount <= searchNumber) || 
             (product.total === searchNumber || product.total <= searchNumber);
        });
      }
      
      // Intentar una búsqueda más flexible si no se encuentran resultados
      if (this.productsFilter.length === 0 && searchTerm.length >= 2) {
        const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
        
        this.productsFilter = allProducts.filter(product => {
          if (!product) return false;
          
          const name = product.name?.toLowerCase() || '';
          const description = product.description?.toLowerCase() || '';
          const categoryName = product.categories?.[0]?.name?.toLowerCase() || '';
          
          return searchWords.some(word => 
        name.includes(word) || 
        description.includes(word) || 
        categoryName.includes(word)
          );
        });
      }
    });
  }
}