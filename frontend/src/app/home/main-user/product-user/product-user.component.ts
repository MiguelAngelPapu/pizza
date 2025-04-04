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
      const shopping = this.catalogService.shoppingCartService.localStorage
      const {id, price} = product
      shopping.push({id, price});
      if(price == null) return;
      this.catalogService.shoppingCartService.localStorage = shopping;
      this.catalogService.shoppingCartService.findProductShoppingCart();
    }
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

        let id = params.get('categoryId');
        id = (id && +id !== 0) ? id : "all";
        this.catalogService.categiriesService.searchCategoryById(id).subscribe((res: any) => {
            this.catalogService.categiriesService.categorie = (!res.id) ? "all" : res.name;
        });

        this.catalogService.findProductsByCategory(id).subscribe((res: any) => {
          this.catalogService.productsService.products = res;
          this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
        }); 
      });
    }
}