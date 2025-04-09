import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { CategiriesService } from '@services/categiries.service';
import { ShoppingCartService } from '@services/shopping-cart.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  protected url: string = 'http://192.168.1.94:5009/api/catalogs';
  public productsFilter: Array<any> = [];
  constructor(
    private http: HttpClient,
    public productsService: ProductsService,
    public categiriesService: CategiriesService,
    public shoppingCartService: ShoppingCartService) {
      
  }
  findProductsByCategory(id: string): Observable<any> {
    return this.http.get(`${this.url}/category/${id}`);
  }

  searchProductsByCategory(searchTerm: string): void {
    this.findProductsByCategory("all").subscribe((res: any) => {
      searchTerm = searchTerm.trim().toLowerCase();
      const allProducts = [this.productsService.createYourOwnPizza, ...res];
      
      // Búsqueda en nombre, descripción y precio
      this.productsFilter = allProducts.filter(product => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const price = product.price !== null ? product.price.toString() : '';
        
        return name.includes(searchTerm) || 
               description.includes(searchTerm) || 
               price.includes(searchTerm);
      });
      
      // Intentar búsqueda basada en precio si el término es numérico y no hay resultados
      if (this.productsFilter.length === 0 && !isNaN(parseFloat(searchTerm))) {
        const searchPrice = parseFloat(searchTerm);
        this.productsFilter = allProducts.filter(product => 
          product.price !== null && product.price <= searchPrice
        );
      }
      
      // Si no hay resultados, mostrar "Crea tu propia pizza"
      if (this.productsFilter.length === 0) {
        this.productsFilter = [this.productsService.createYourOwnPizza];
      }
    });   
  }
}