import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-search-shopping-cart',
  standalone: true,  // Añade esta línea
  imports: [FormsModule], // Sin esto no funciona el ngModel
  templateUrl: './search-shopping-cart.component.html',
  styleUrl: './search-shopping-cart.component.css'
})
export class SearchShoppingCartComponent {

  @ViewChild('miInput') inputRef!: ElementRef;
  public searchName: string = '';
  public productsFilter: any[] = [];


  constructor(
    public shoppingCartService: ShoppingCartService
  ) { }


  focusInput() {
    this.inputRef.nativeElement.focus();
  }
  searchProducts(e: Event): void {
    this.shoppingCartService.searchProductsPress(this.searchName);
  }
}