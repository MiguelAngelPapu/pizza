import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-crust-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crust-product.component.html',
  styleUrl: './crust-product.component.css'
})
export class CrustProductComponent implements OnInit, OnDestroy, AfterViewInit {
  private routerSubscription: Subscription | null = null; // Suscripción para escuchar cambios en la navegación

  constructor(
    public customProductService: CustomProductService,
    private router: Router, // Router para escuchar eventos de navegación
    private activatedRoute: ActivatedRoute // Ruta activa para obtener parámetros
  ) { }

  ngOnInit(): void {
    this.checkUrlForParams(); // Verificar parámetros iniciales en la URL

    // Escuchar cambios en la URL y actualizar parámetros
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtrar solo eventos de navegación finalizada
    ).subscribe(() => {
      this.checkUrlForParams(); // Actualizar parámetros al cambiar la URL
      this.customProductService.createProductService.localStorage = this.customProductService.custom;
    });
  }

  ngAfterViewInit(): void {
    // Actualizar el estado de los crusts después de que la vista esté lista
    setTimeout(() => {
      this.updateCrustActive();
    }, 200);
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar fugas de memoria
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }

  // Verifica si hay un parámetro "crust" en la URL y lo asigna al servicio
  private checkUrlForParams(): void {
    const crust = this.activatedRoute.snapshot.parent?.params['crust']; // Obtener el parámetro "crust"
    if (crust) {
      this.customProductService.custom.crust = +crust; // Asignar el crust al servicio
      this.updateCrustActive(); // Actualizar el estado de los crusts
    }
  }
  
  // Marca el crust activo basado en el crust seleccionado
  private updateCrustActive(): void {
    const crusts = this.customProductService.crustProductService.crusts; // Obtener lista de crusts
    if (crusts) {
      crusts.forEach(crust => {
        crust.active = crust.id === this.customProductService.custom.crust; // Activar el crust seleccionado
      });
    }
  }
}
