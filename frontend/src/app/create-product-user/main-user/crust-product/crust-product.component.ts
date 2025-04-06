import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-crust-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crust-product.component.html',
  styleUrls: ['./crust-product.component.css', '../main-user.component.css']
})
export class CrustProductComponent {
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['crust']) {
        const crustId = +params['crust'];
        this.customProductService.custom.crust = crustId;
        this.updateActiveCrust(crustId);
      }
    });
  }

  // Método para actualizar la corteza activa
  updateActiveCrust(crustId: number) {
    this.customProductService.crustProductService.crusts.forEach(crust => {
      crust.active = crust.id === crustId;
    });
  }
}
