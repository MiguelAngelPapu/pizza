import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { SearchShoppingCartComponent } from "./search-shopping-cart/search-shopping-cart.component";
import { CatalogService } from '@services/catalog.service';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-header-user',
  standalone: true,
  imports: [RouterModule, SearchShoppingCartComponent],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent implements AfterViewChecked {
  @ViewChild('inputComponent') inputComp!: SearchShoppingCartComponent;

  public name = 'Tus productos';
  protected showSearch = false;
  private focusPending = false;
  
  constructor(
    public catalogService: CatalogService,
    public shoppingCartService: ShoppingCartService,
  ) {}
  showFormSearchProducts() {
    this.showSearch = !this.showSearch // Oculta o muestra el formulario de búsqueda 
    this.focusPending = this.showSearch; // Cambia el estado de focusPending para indicar que se debe enfocar el input una vez que se muestre 
    if(this.showSearch) return    
    this.shoppingCartService.findProductInLocalStorage().subscribe(res=>{     
      this.shoppingCartService.productsFilter = res.body;
    })
  }
 
  // Este método se llama después de que la vista ha sido verificada, cada vez que Angular realiza una verificación de cambios en el componente del input
  ngAfterViewChecked(): void {
    if (this.focusPending && this.inputComp) {
      this.inputComp.focusInput();
      this.focusPending = false;
    }
  }
}