import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';


@Component({
  selector: 'app-size-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './size-product.component.html',
  styleUrls: ['./size-product.component.css', '../main-user.component.css']
})
export class SizeProductComponent {
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute
  ){
    console.log("Hola");
    
  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['size']) {
        const sizeId = +params['size'];
        this.customProductService.custom.size = sizeId;
        this.updateActiveSize(sizeId);
      }
    });
  }


  // Método para actualizar el tamaño activo
  updateActiveSize(sizeId: number) {
    this.customProductService.sizeProductService.sizes.forEach(size => {
      size.active = size.id === sizeId;
    });
  }
}
