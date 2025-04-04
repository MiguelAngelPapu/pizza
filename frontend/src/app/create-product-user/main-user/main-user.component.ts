import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-main-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {
  constructor(
     public customProductService: CustomProductService
  ) { }
}
