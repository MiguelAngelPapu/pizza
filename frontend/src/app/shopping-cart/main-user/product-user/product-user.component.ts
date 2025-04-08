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
}
