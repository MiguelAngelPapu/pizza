import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public datos: Array<any> = [];
  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
    this.apiService.findApi().subscribe(
      (response) => {
        this.datos.push(response);
        console.log('API response:', this.datos);
      }, 
      (error) => {
        console.error('Error fetching API:', error);
      }
    );
  }
}
