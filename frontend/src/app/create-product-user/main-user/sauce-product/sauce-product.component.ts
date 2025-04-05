import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-sauce-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sauce-product.component.html',
  styleUrls: ['./sauce-product.component.css', '../main-user.component.css']
})
export class SauceProductComponent {
  public sauces = [
    { id: 1, name: 'BBQ'},
    { id: 2, name: 'Tomato', active: true },
    { id: 3, name: 'Garlic Hurb'}
  ];
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['sauce']) {
        const sauceId = +params['sauce'];
        this.customProductService.custom['left-half'].sauce = sauceId;
        this.updateActiveSauces(sauceId);
      }
    });
  }

  // Método para actualizar la corteza activa
  updateActiveSauces(sauceId: number) {
    this.sauces.forEach(sauce => {
      sauce.active = sauce.id === sauceId;
    });
  }
}
