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
       // Convertir valores a minúsculas para búsqueda insensible a mayúsculas
      searchTerm = searchTerm.trim().toLowerCase();
      this.productsFilter = [this.productsService.createYourOwnPizza, ...res].filter(product => {
        //Normaliza el término de búsqueda para hacerlo consistente
        //trim() elimina espacios en blanco al inicio y final del texto
        //toLowerCase() convierte todas las letras a minúsculas
        //Importante: esto permite que la búsqueda funcione independientemente de si el usuario escribe en MAYÚSCULAS o minúsculas
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const price = product.price !== null ? product.price.toString() : '';

        // Buscar el término completo en cada campo
        return name.includes(searchTerm) ||
          description.includes(searchTerm) ||
          price.includes(searchTerm);
      });
      if (!this.productsFilter.length) this.productsFilter = [this.productsService.createYourOwnPizza]; // Si no hay coincidencias, muestra el primer producto que es create your own pizza
    });   
  }
}