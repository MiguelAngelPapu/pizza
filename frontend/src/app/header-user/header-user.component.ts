import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { SearchProductsComponent } from "./search-products/search-products.component";
import { CatalogService } from '@services/catalog.service';

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
  
  constructor(public catalogService: CatalogService) {}

  wellcomeMessage() {
    return `Welcome to ${this.name}`;
  }
  showFormSearchProducts() {
    this.showSearch = !this.showSearch // Oculta o muestra el formulario de búsqueda 
    this.focusPending = this.showSearch; // Cambia el estado de focusPending para indicar que se debe enfocar el input una vez que se muestre
    if(this.showSearch) return
    const category = this.catalogService.categiriesService.categories.filter((category: any) => {
      if (this.catalogService.categiriesService.categorie.toLowerCase().replaceAll(" ", "-") != category.name.toLowerCase().replaceAll(" ", "-")) {
        return category;
      }
    this.catalogService.findProductsByCategory(category.id).subscribe((res: any) => {
      this.catalogService.productsService.products = res;
      this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
    });
   
    
  })
    // this._categories = categories;
    // this._categorie = categorie.toLowerCase()
        
  }
  // Este método se llama después de que la vista ha sido verificada, cada vez que Angular realiza una verificación de cambios en el componente del input
  ngAfterViewChecked(): void {
    if (this.focusPending && this.inputComp) {
      this.inputComp.focusInput();
      this.focusPending = false;
    }
  }
}