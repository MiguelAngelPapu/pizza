import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-topping-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topping-product.component.html',
  styleUrls: ['./topping-product.component.css', '../main-user.component.css']
})
export class ToppingProductComponent {
 public toppingStyles = [
    { id: 1, name: 'Style 1', imageUrl: '/assets/img/topping-style.png', active: true },
    { id: 2, name: 'Style 2', imageUrl: '/assets/img/topping-style2.png' }
  ]
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['topping']) {
        const toppingId = +params['topping'];
        this.customProductService.custom.topping = toppingId;
        this.updateActivetopping(toppingId);
      }
    });
  }
  
  
  // Método para actualizar la corteza activa
  updateActivetopping(toppingId: number) {
    this.toppingStyles.forEach(topping => {
      topping.active = topping.id === toppingId;
    });
  }
}