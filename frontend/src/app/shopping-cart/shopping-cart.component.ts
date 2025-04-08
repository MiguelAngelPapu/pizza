import { Component } from '@angular/core';
import { HeaderUserComponent } from './header-user/header-user.component';
import { MainUserComponent } from './main-user/main-user.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderUserComponent, MainUserComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
}
