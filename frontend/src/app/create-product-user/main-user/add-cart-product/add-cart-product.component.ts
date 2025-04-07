import { Component } from '@angular/core';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-add-cart-product',
  standalone: true,
  imports: [],
  templateUrl: './add-cart-product.component.html',
  styleUrl: './add-cart-product.component.css'
})
export class AddCartProductComponent {
  constructor(public customProductService: CustomProductService) { }
}
