import { Component } from '@angular/core';
import { BubbleBuyUserComponent } from "./bubble-buy-user/bubble-buy-user.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-user',
  standalone: true,  // Añade esta línea
  imports: [RouterOutlet, BubbleBuyUserComponent],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {

}
