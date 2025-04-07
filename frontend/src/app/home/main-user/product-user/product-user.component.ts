import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService } from '@services/catalog.service';
import { CustomProductService } from '@services/custom-product.service';

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
  imports: [RouterLink, CommonModule], // Añadir RouterLink aquí
  templateUrl: './product-user.component.html',
  styleUrl: './product-user.component.css'
})
export class ProductUserComponent implements OnInit { 
    constructor(
      public customProductService: CustomProductService,
      public catalogService: CatalogService,
      private route: ActivatedRoute // Aquí inyectas ActivatedRoute
    ) { 
      
    }
    addProductShoppingCart(product: Product): void {
      const shopping = this.catalogService.shoppingCartService.localStorage;
      const { id, price } = product;

      // Buscamos si el producto ya existe en el localStorage con el id
      // Si el producto ya existe en el carrito devolvemos el producto para su validación
      const productInCart = shopping.find((item: any) => item.id === id);
      
      // Si el producto ya existe en el carrito, incrementa la cantidad
      if (productInCart)  productInCart.amount = (productInCart.amount || 0) + 1;
      // Si el producto no existe, lo agrega la prpóedad amount y lo inicializa en 1
      else shopping.push({ id, price, amount: 1, custom: false});
      

      this.catalogService.shoppingCartService.localStorage = shopping;
      this.catalogService.shoppingCartService.updateShoppingCartSummary();
    }

   
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

        let id = params.get('categoryId');
        id = (id && +id !== 0) ? id : "all";
        this.catalogService.findProductsByCategory(id).subscribe((res: any) => {
          this.catalogService.productsService.products = res;
          this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
        }); 
      });
    }
}