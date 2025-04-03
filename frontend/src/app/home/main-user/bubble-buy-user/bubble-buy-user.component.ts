import { Component } from '@angular/core';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-bubble-buy-user',
  standalone: true,  // Añade esta línea
  imports: [],
  templateUrl: './bubble-buy-user.component.html',
  styleUrl: './bubble-buy-user.component.css'
})
export class BubbleBuyUserComponent {
  
  constructor(public shoppingCartService: ShoppingCartService) {
    
  }
}