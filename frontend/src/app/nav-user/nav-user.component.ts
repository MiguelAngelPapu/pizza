import { Component } from '@angular/core';
import { CatalogService } from '@services/catalog.service';


@Component({
  selector: 'app-nav-user',
  standalone: true,  // Añade esta línea
  imports: [],
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css'
})
export class NavUserComponent {
  constructor(public catalogService: CatalogService) { 

  }
  sendCategory(e: Event): void {
    e.preventDefault();
    const a = e.target as HTMLInputElement
    const {id} = a;
    
    this.catalogService.categiriesService.categorie = a.textContent || ''; 
   
    this.catalogService.findProductsByCategory((+id !== 0) ? id : "all").subscribe((res: any) => {
      this.catalogService.productsService.products = res;
      this.catalogService.productsFilter = [this.catalogService.productsService.createYourOwnPizza, ...res];
    }); 
  }
  ngOnInit(): void {
    this.catalogService.categiriesService.findCategories().subscribe((res: any) => {
      this.catalogService.categiriesService.categories = res;
      console.log(this.catalogService.categiriesService.categories);
      
    });
  }
}