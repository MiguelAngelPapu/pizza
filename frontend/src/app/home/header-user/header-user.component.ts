import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { SearchProductsComponent } from "./search-products/search-products.component";
import { CatalogService } from '@services/catalog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  standalone: true,  // Añade esta línea
  imports: [SearchProductsComponent],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent implements AfterViewChecked {
  @ViewChild('inputComponent') inputComp!: SearchProductsComponent;

  public name = 'JKM Resto';
  protected showSearch = false;
  private focusPending = false;
  
  constructor(
    public catalogService: CatalogService,
    private router: Router
  ) {}

  wellcomeMessage() {
    return `Bienvenido a ${this.name}`;
  }
  showFormSearchProducts() {
    this.showSearch = !this.showSearch // Oculta o muestra el formulario de búsqueda 
    this.focusPending = this.showSearch; // Cambia el estado de focusPending para indicar que se debe enfocar el input una vez que se muestre
    if(this.showSearch) return

    const categoryId = this.detectCategoryInURL(this.router.url);
    console.log(categoryId);
    
    this.catalogService.findProductsByCategory(categoryId).subscribe((res: any) => {
      this.catalogService.productsService.products = res;
      this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
    })     
  }
  public detectCategoryInURL(url: string): string {
    // Buscar un patrón como "/category/123" en la URL
    const pattern = /\/category\/(\d+)/;
    const result = url.match(pattern);
    let categoryId = "all";
    // Si encontramos el patrón y hay un número
    if (result && result[1]) {
      // Convertir el texto "123" a número 123
      categoryId = (+result[1]).toString();
      
    }
    return categoryId;
    
  }
  // Este método se llama después de que la vista ha sido verificada, cada vez que Angular realiza una verificación de cambios en el componente del input
  ngAfterViewChecked(): void {
    if (this.focusPending && this.inputComp) {
      this.inputComp.focusInput();
      this.focusPending = false;
    }
  }
}