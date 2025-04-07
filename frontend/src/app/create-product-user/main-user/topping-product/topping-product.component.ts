import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-topping-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topping-product.component.html',
  styleUrl: './topping-product.component.css'
})
export class ToppingProductComponent implements OnInit, OnDestroy, AfterViewInit {
  private routerSubscription: Subscription | null = null;

  constructor(
    public customProductService: CustomProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkUrlForParams();

    // Escucha cambios en la navegación
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkUrlForParams();
      this.customProductService.createProductService.localStorage = this.customProductService.custom;
    });
  }

  ngAfterViewInit(): void {
    // Actualiza los toppings después de que la vista esté lista
    setTimeout(() => {
      this.updateCrustsActive();
    }, 200);
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar fugas de memoria
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }

  // Verifica el parámetro "topping" en la URL y actualiza el servicio
  private checkUrlForParams(): void {
    const topping = this.activatedRoute.snapshot.parent?.params['topping'];
    if (topping) {
      this.customProductService.custom.topping = +topping;
      this.updateCrustsActive();
    }
  }
  
  // Actualiza el topping activo basado en el seleccionado
  private updateCrustsActive(): void {
    const toppings = this.customProductService.toppingProductService.toppingStyles;
    this.customProductService.createProductService.localStorage = this.customProductService.custom;
    if (toppings) {
      toppings.forEach(topping => {
        topping.active = topping.id === this.customProductService.custom.topping; 
      });
    }
  }
}