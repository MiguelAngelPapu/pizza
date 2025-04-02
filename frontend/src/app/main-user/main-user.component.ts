import { Component } from '@angular/core';
import { ProductUserComponent } from "./product-user/product-user.component";
import { BubbleBuyUserComponent } from "./bubble-buy-user/bubble-buy-user.component";

@Component({
  selector: 'app-main-user',
  standalone: true,  // Añade esta línea
  imports: [ProductUserComponent, BubbleBuyUserComponent],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {

}
