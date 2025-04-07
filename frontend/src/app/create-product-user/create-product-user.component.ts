import { Component, OnInit } from '@angular/core';
import { MainUserComponent } from "../create-product-user/main-user/main-user.component";
import { HeaderUserComponent } from "./header-user/header-user.component";
import { CustomProductService } from '@services/custom-product.service';


@Component({
  selector: 'app-create-product-user',
  standalone: true,
  imports: [MainUserComponent, HeaderUserComponent],
  templateUrl: './create-product-user.component.html',
  styleUrl: './create-product-user.component.css'
})
export class CreateProductUserComponent implements OnInit {
  public createProductService: any;
  constructor(
    public customProductService: CustomProductService
  ) {}
  
  ngOnInit(): void {

    setTimeout(() => {
      this.createProductService = this.customProductService.createProductService.localStorage;     
    if (this.createProductService && typeof this.createProductService === 'object' && !Array.isArray(this.createProductService)) {
      this.customProductService.custom.size = Number(this.createProductService.size);
      this.customProductService.custom.crust = Number(this.createProductService.crust);
      this.customProductService.custom.topping = Number(this.createProductService.topping);
      this.customProductService.custom['left-half'].sauce = Number(this.createProductService['left-half'].sauce);
      this.customProductService.custom['left-half'].choose = this.createProductService['left-half'].choose;
      this.customProductService.custom['right-half'].sauce = Number(this.createProductService['right-half'].sauce);
      this.customProductService.custom['right-half'].choose = this.createProductService['right-half'].choose;      
    }
    }, 200);

  }
}
