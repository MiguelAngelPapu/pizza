import { Component } from '@angular/core';
import { CatalogService } from '@services/catalog.service';
import { CreateProductService } from '@services/create-product.service';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-add-cart-product',
  standalone: true,
  imports: [],
  templateUrl: './add-cart-product.component.html',
  styleUrl: './add-cart-product.component.css'
})
export class AddCartProductComponent {
  constructor(
    public catalogService: CatalogService,
    public customProductService: CustomProductService,
    public createProductService: CreateProductService
  ) { }
  public addToCart(e: Event): void {
    e.preventDefault();
    const shoppingCart = this.catalogService.shoppingCartService.localStorage;
    shoppingCart.push({
      id: "CUSTOM",
      price: this.customProductService.total,
      amount: 1,
      custom: true,
      ...this.createProductService.localStorage
    });
    this.catalogService.shoppingCartService.localStorage = shoppingCart;
    this.createProductService.clearLocalStorage();
    window.location.assign('/home');
  }
}
