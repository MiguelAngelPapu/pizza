import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUserComponent } from "./header-user/header-user.component";
import { NavUserComponent } from "./nav-user/nav-user.component";
import { MainUserComponent } from "./main-user/main-user.component";

@Component({
  selector: 'app-root',
  standalone: true,  // Añade esta línea
  imports: [RouterOutlet, HeaderUserComponent, NavUserComponent, MainUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
}
