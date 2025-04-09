import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-product-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-user.component.html',
  styleUrl: './product-user.component.css'
})
export class ProductUserComponent implements OnInit {
  public products: Array<any> = [];
  constructor(
    public shoppingCartService: ShoppingCartService
  ) { 
  }
  ngOnInit(): void {
    this.shoppingCartService.findProductInLocalStorage().subscribe(res=>{     
      this.products = res;
      console.log(res);
      
    })
  }
  updateCart(e: Event, id: string): void {
    e.preventDefault();
    const option = (e as SubmitEvent).submitter?.dataset['opcion'] || '';
    
    if (option === 'increaseAmount' || option === 'decreaseAmount') {
      this.updateProductAmount(id, option === 'increaseAmount' ? 1 : -1);
    }
    else if (option === 'remove') {
      this.removeProduct(id);
    } 
    else if (option === 'change' || e.type === 'input') {
      const target = e.target as HTMLInputElement;
      const newAmount = parseInt(target.value) || 1;
      this.setProductAmount(id, newAmount);
    }
    else {
      console.log('No se ha seleccionado ninguna opción válida');
    }
  }
  
  private updateProductAmount(id: string, change: number): void {
    this.products = this.products.map(product => {
      if (product.id === id) {
        const newAmount = product.amount + change;
        if (newAmount < 1) return product; // No permitir cantidades menores a 1
        
        this.shoppingCartService.localStorageUpdateAmount(id, newAmount);
        this.shoppingCartService.updateShoppingCartSummary();
        return { 
          ...product, 
          amount: newAmount, 
          total: product.price * newAmount 
        };
      }
      return product;
    });
  }
  
  private setProductAmount(id: string, newAmount: number): void {
    if (newAmount < 1) newAmount = 1;
    
    this.products = this.products.map(product => {
      if (product.id === id) {
        this.shoppingCartService.localStorageUpdateAmount(id, newAmount);
        this.shoppingCartService.updateShoppingCartSummary();
        return { 
          ...product, 
          amount: newAmount, 
          total: product.price * newAmount 
        };
      }
      return product;
    });
  }
  
  private removeProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
    this.shoppingCartService.localStorageRemoved(id);
    this.shoppingCartService.updateShoppingCartSummary();
  }
}
