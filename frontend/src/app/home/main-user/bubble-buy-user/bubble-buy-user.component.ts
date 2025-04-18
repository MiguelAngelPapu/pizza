import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-bubble-buy-user',
  standalone: true,  // Añade esta línea
  imports: [RouterModule],
  templateUrl: './bubble-buy-user.component.html',
  styleUrl: './bubble-buy-user.component.css'
})
export class BubbleBuyUserComponent implements OnInit {
  
  constructor(
    public shoppingCartService: ShoppingCartService
  ) {
    
  }
  ngOnInit(): void {
    this.shoppingCartService.updateShoppingCartSummary();
  }
}