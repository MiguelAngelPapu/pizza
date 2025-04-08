import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-main-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent implements OnInit {
  constructor(
    public shoppingCartService: ShoppingCartService
  ) {

  }
  ngOnInit(): void {
    this.shoppingCartService.updateShoppingCartSummary();
  }
}
