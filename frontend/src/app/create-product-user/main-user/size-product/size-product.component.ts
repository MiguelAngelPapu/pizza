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
  public sizes = [
    { id: 1, name: '7 inch', price: 5.99, active: true },
    { id: 2, name: '9.5 inch', price: 5.99 },
    { id: 3, name: '11.5 inch', price: 13.99 },
    { id: 4, name: '13.5 inch', price: 5.99 },
    { id: 5, name: '9.5 inch', price: 11.99 },
    { id: 6, name: '11.5 inch', price: 13.99 },
    { id: 7, name: '13.5 inch', price: 15.99 }
  ];
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute
  ){}

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
    this.sizes.forEach(size => {
      size.active = size.id === sizeId;
    });
  }
}
