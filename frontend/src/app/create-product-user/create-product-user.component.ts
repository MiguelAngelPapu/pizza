import { Component } from '@angular/core';
import { MainUserComponent } from "../create-product-user/main-user/main-user.component";
import { HeaderUserComponent } from "./header-user/header-user.component";

@Component({
  selector: 'app-create-product-user',
  standalone: true,
  imports: [MainUserComponent, HeaderUserComponent],
  templateUrl: './create-product-user.component.html',
  styleUrl: './create-product-user.component.css'
})
export class CreateProductUserComponent {

}
