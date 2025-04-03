import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CatalogService } from '@services/catalog.service';

@Component({
  selector: 'app-search-products',
  standalone: true,  // Añade esta línea
  imports: [FormsModule], // Sin esto no funciona el ngModel
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})
export class SearchProductsComponent {
  @ViewChild('miInput') inputRef!: ElementRef;
  public searchName: string = ''; 

  constructor(public catalogService : CatalogService) { }

  focusInput() {
    this.inputRef.nativeElement.focus();
  }
  searchProductsPress(e: Event):void {
    this.catalogService.searchProductsByCategory(this.searchName);
  }
}