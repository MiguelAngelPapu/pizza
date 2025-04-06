import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-crust-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crust-product.component.html',
  styleUrls: ['./crust-product.component.css', '../main-user.component.css']
})
export class CrustProductComponent implements OnInit, OnDestroy, AfterViewInit {
  private routerSubscription: Subscription | null = null;

  constructor(
    public customProductService: CustomProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkUrlForParams();

    // Escuchar cambios de navegación
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkUrlForParams();
    });
  }

  ngAfterViewInit(): void {
    // Actualizar los crusts después de que la vista esté lista
    setTimeout(() => {
      this.updateCrustsActive();
    }, 200);
  }
  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar fugas de memoria
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }

  // Verificar el parámetro "crust" en la URL y actualizar el servicio
  private checkUrlForParams(): void {
    const crust = this.activatedRoute.snapshot.parent?.params['crust'];
    if (crust) {
      this.customProductService.custom.crust = +crust;
      this.updateCrustsActive();
    }
  }
  
  // Actualizar el crust activo basado en el crust seleccionado
  private updateCrustsActive(): void {
    const crusts = this.customProductService.crustProductService.crusts;
    if (crusts) {
      crusts.forEach(crust => {
        crust.active = crust.id === this.customProductService.custom.crust; 
      });
    }
  }
}
