import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-sauce-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sauce-product.component.html',
  styleUrls: ['./sauce-product.component.css', '../main-user.component.css']
})
export class SauceProductComponent implements OnInit, OnDestroy, AfterViewInit {
  public customViews: 'left-half' | 'right-half' = 'left-half'; // Vista personalizada del producto.
  // ID de la salsa seleccionada.
  private sauceId: number | null = null;
  // Suscripción a eventos de navegación.
  private routerSubscription: Subscription | null = null;

  constructor(
    public customProductService: CustomProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.customViews = this.customProductService.customViews as 'left-half' | 'right-half';
  }

  // Inicializa el componente y configura la suscripción a cambios de URL.
  ngOnInit(): void {
    this.checkUrlForParams();
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkUrlForParams();
    });
  }

  // Actualiza el estado de las salsas después de cargar la vista.
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateActiveSauces();
    }, 200);
  }

  // Limpia las suscripciones al destruir el componente.
  ngOnDestroy(): void {
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }

  // Verifica el parámetro "sauce" en la URL y actualiza la salsa seleccionada.
  private checkUrlForParams(): void {
    
    this.sauceId = +this.activatedRoute.snapshot.parent?.params['sauce'];
    if (this.sauceId && this.customViews) {
      this.customProductService.custom[this.customViews].sauce = this.sauceId;
    } 
    this.updateActiveSauces();
  }

  // Marca como activa la salsa seleccionada.
  updateActiveSauces(): void {
    const sauces = this.customProductService.sauceProductService.sauces;
    if (sauces) {
      sauces.forEach(sauce => {
        sauce.active = sauce.id === this.sauceId;
      });
    }
  }
}
