import { Component } from '@angular/core';
import { MainUserComponent } from "../create-product-user/main-user/main-user.component";
import { HeaderUserComponent } from "./header-user/header-user.component";
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-create-product-user',
  standalone: true,
  imports: [MainUserComponent, HeaderUserComponent],
  templateUrl: './create-product-user.component.html',
  styleUrl: './create-product-user.component.css'
})
export class CreateProductUserComponent {
  constructor(
    public customProductService: CustomProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Escuchar cambios en la URL para actualizar la vista
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {      
      // Determinar el paso actual según la URL
      if (event.url.includes('/left-half/right-half')) {
        this.customProductService.page = 2;
        this.customProductService.customViews = 'right-half';
      } else if (event.url.includes('/left-half')) {   
        this.customProductService.page = 2;
        this.customProductService.customViews = 'left-half';
      } else {
        this.customProductService.page = 1;
        this.customProductService.customViews = 'create-pizza'; 
      }
    });
    this.processRouteParams();
  }

  processRouteParams() {
    // Parámetros de la ruta principal
    this.route.params.subscribe(params => {
      
        this.customProductService.customViews = 'create-pizza';
        this.customProductService.custom.size = params['size'];
        this.customProductService.custom.crust = params['crust'];
        this.customProductService.custom.topping = params['topping'];
    });
    // Parámetros para /left-half si existe
    if (this.router.url.includes('/left-half')) {
      // Obtener la ruta hija para left-half
      const leftHalfRoute = this.route.firstChild;
      if (leftHalfRoute) {
        leftHalfRoute.params.subscribe(params => {
          this.customProductService.customViews = 'left-half';
          this.customProductService.custom['left-half'].sauce = params['sauce'];
          this.customProductService.custom['left-half'].choose = params['choose'];
        });
      }
      
      // Parámetros para /right-half si existe
      if (this.router.url.includes('/right-half')) {
        const rightHalfRoute = leftHalfRoute?.firstChild;
        if (rightHalfRoute) {
          rightHalfRoute.params.subscribe(params => {
            this.customProductService.customViews = 'right-half';
            this.customProductService.custom['right-half'].sauce = params['sauce'];
            this.customProductService.custom['right-half'].choose = params['choose'];
          });
        }
      }
    }
  }
}
