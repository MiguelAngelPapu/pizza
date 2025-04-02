import { Component } from '@angular/core';
import { CatalogService } from '@services/catalog.service';

// Definir una interfaz los productos que se pasan al metodo showProduct
interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number | null;
  imageUrl: string;
}
@Component({
  selector: 'app-product-user',
  standalone: true,  // Añade esta línea
  imports: [],
  templateUrl: './product-user.component.html',
  styleUrl: './product-user.component.css'
})
export class ProductUserComponent {
    constructor(public catalogService: CatalogService) { 
      
    }
    addProductShoppingCart(product: Product): void {
      const shopping = this.catalogService.shoppingCartService.localStorage
      const {id, price} = product
      shopping.push({id, price});
      if(price == null) return;
      this.catalogService.shoppingCartService.localStorage = shopping;
      this.catalogService.shoppingCartService.findProductShoppingCart();
    }
    ngOnInit(): void {
      this.catalogService.findProductsByCategory().subscribe((res: any) => {
        this.catalogService.productsService.products = res;
        this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
      });
    }
    
}