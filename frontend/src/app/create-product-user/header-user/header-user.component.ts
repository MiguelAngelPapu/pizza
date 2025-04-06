import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-header-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent {
  constructor(public customProductService: CustomProductService) {

  }

}
