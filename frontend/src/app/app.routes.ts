import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductUserComponent } from './home/main-user/product-user/product-user.component';
import { CreateProductUserComponent } from './create-product-user/create-product-user.component';
import { SizeProductComponent } from './create-product-user/main-user/size-product/size-product.component';
import { CrustProductComponent } from './create-product-user/main-user/crust-product/crust-product.component';
import { ToppingProductComponent } from './create-product-user/main-user/topping-product/topping-product.component';
import { ProductPartsComponent } from './create-product-user/main-user/product-parts/product-parts.component';
import { SauceProductComponent } from './create-product-user/main-user/sauce-product/sauce-product.component';
import { ChooseToppingsProductComponent } from './create-product-user/main-user/choose-toppings-product/choose-toppings-product.component';

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
        path: 'create-pizza', 
        component: CreateProductUserComponent,
        children: [
            { path: '', component: SizeProductComponent, outlet: 'size' },
            { path: '', component: CrustProductComponent, outlet: 'crust' },
            { path: '', component: ToppingProductComponent, outlet: 'topping' },
            // Ruta para la mitad izquierda (como ruta hija)
            { 
                path: 'left-half', 
                children: [
                    { path: '', component: ProductPartsComponent, outlet: 'choose-topping-parts' },
                    { path: '', component: SauceProductComponent, outlet: 'sauce' },
                    { path: '', component: ChooseToppingsProductComponent, outlet: 'choose' }
                    // Ruta para la mitad derecha (anidada dentro de left-half)
                    // {     
                    //     path: 'right-half', 
                    //     component: CompleteCustomizerComponent 
                    // }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];