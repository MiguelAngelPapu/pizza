import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductUserComponent } from './home/main-user/product-user/product-user.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', 
        component: HomeComponent,
        children: [
            { path: '', component: ProductUserComponent }, // Ruta por defecto
            { path: 'category/:categoryId', component: ProductUserComponent }, // Ruta con parámetro
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];