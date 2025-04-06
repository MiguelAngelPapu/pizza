import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, Event, ActivatedRoute, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {
  constructor(
     public customProductService: CustomProductService,
     private router: Router,
     private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.processRouteParams();
    // Escuchar cambios en la URL para actualizar la vista
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {      
      this.processRouteParams();
    });
    
  }

  processRouteParams() {
    // Parámetros de la ruta principal
    this.route.params.subscribe(params => {
      if (this.router.url.includes('/create-pizza')) {
        this.customProductService.page = 1;
        this.customProductService.customViews = 'create-pizza';
        this.customProductService.custom.size = params['size'];
        this.customProductService.custom.crust = params['crust'];
        this.customProductService.custom.topping = params['topping'];

      }else if (this.router.url.includes('/left-half')) {
        this.customProductService.selectParts = true;
        this.customProductService.page = 2;
        this.customProductService.customViews = 'left-half';
        this.customProductService.custom['left-half'].sauce = params['sauce'];
        this.customProductService.custom['left-half'].choose = params['choose'];

      }else if (this.router.url.includes('/right-half')) {
        this.customProductService.selectParts = false;
        this.customProductService.page = 2;
        this.customProductService.customViews = 'right-half';
        this.customProductService.custom['right-half'].sauce = params['sauce'];
        this.customProductService.custom['right-half'].choose = params['choose'];
      }
    });
  }
}
