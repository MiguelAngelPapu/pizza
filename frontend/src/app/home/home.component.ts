import { Component } from '@angular/core';
import { HeaderUserComponent } from "./header-user/header-user.component";
import { NavUserComponent } from "./header-user/nav-user/nav-user.component";
import { MainUserComponent } from "./main-user/main-user.component";
@Component({
  selector: 'app-home',
  standalone: true,  // Añade esta línea
  imports: [HeaderUserComponent, NavUserComponent, MainUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
