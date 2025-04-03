import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '@services/catalog.service';


@Component({
  selector: 'app-nav-user',
  standalone: true,  // Añade esta línea
  imports: [RouterLink, CommonModule], // Añadir RouterLink aquí
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css'
})
export class NavUserComponent {
  constructor(public catalogService: CatalogService,) { 

  }
  sendCategory(e: Event): void {
    const a = e.target as HTMLInputElement
    this.catalogService.categiriesService.categorie = a.textContent || ''; 
  }
  ngOnInit(): void {    
    this.catalogService.categiriesService.findCategories().subscribe((res: any) => {
      this.catalogService.categiriesService.categories = res;
      console.log(this.catalogService.categiriesService.categories);
      
    });
  }
}