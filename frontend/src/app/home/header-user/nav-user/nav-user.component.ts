import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CatalogService } from '@services/catalog.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css'
})
export class NavUserComponent implements OnInit, OnDestroy {
  // Para guardar nuestra suscripción y poder limpiarla después
  private routerSubscription: Subscription | null = null;
  
  constructor(
    public catalogService: CatalogService,
    private router: Router
  ) { 
    
  }
  
  ngOnInit(): void {
    // 1. Revisar la URL actual cuando se inicializa el componente
    this.detectCategoryInURL(this.router.url);
    
    // 2. Escuchar cambios futuros en la URL
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.detectCategoryInURL(this.router.url);
    });
  }
  
  ngOnDestroy(): void {
    // Limpieza para evitar pérdidas de memoria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  
  /**
   * Busca el número de categoría en la URL
   * Por ejemplo: de "/home/category/2" obtiene el 2
   */
  public detectCategoryInURL(url: string): void {
    // Buscar un patrón como "/category/123" en la URL
    const pattern = /\/category\/(\d+)/;
    const result = url.match(pattern);
    let categoryId = 0;
    // Si encontramos el patrón y hay un número
    if (result && result[1]) {
      // Convertir el texto "123" a número 123
      categoryId = +result[1];
      
    }
     // Actualizar qué categoría está activa
     this.markCategoryAsActive(categoryId);
  }
  
  /**
   * Marca como activa la categoría con el ID proporcionado
   * y como inactivas todas las demás
   */
  public markCategoryAsActive(categoryId: number): void {
    
    // Verificar que existan categorías
    if (!this.catalogService.categiriesService?.categories) {
      console.log('No hay categorías disponibles');
      return;
    }
    setTimeout(() => {
      this.catalogService.categiriesService.categories.forEach(category => {
        category.active = category.id === categoryId;
      });
    },150);
   
  }
}