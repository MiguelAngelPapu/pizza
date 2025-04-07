import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-size-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './size-product.component.html',
  styleUrl: './size-product.component.css'
})
export class SizeProductComponent implements OnInit, OnDestroy, AfterViewInit {
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
    // Actualizar el estado de los zises después de que la vista esté lista
    setTimeout(() => {
      this.updateSizeActive();
    }, 200);
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar fugas de memoria
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }

  // Verifica si hay un parámetro "size" en la URL y lo asigna al servicio
  private checkUrlForParams(): void {
    const size = this.activatedRoute.snapshot.parent?.params['size']; // Obtener el parámetro "size"
    if (size) {
      this.customProductService.custom.size = +size; // Asignar el tamaño al servicio
      this.updateSizeActive(); // Actualizar el estado de los tamaños
    }
  }
  
  // Marca el tamaño activo basado en el tamaño seleccionado
  private updateSizeActive(): void {
    const sizes = this.customProductService.sizeProductService.sizes; // Obtener lista de tamaños
    if (sizes) {
      sizes.forEach(size => {
        size.active = size.id === this.customProductService.custom.size; // Activar el tamaño seleccionado
      });
    }
  }
}
