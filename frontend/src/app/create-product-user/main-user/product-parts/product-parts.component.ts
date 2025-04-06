import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-product-parts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-parts.component.html',
  styleUrls: ['./product-parts.component.css', '../main-user.component.css']
})
export class ProductPartsComponent {
constructor(
    public customProductService: CustomProductService,
  ){}

  ngOnInit(): void {
    
  }
}
