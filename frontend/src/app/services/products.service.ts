import { Injectable } from '@angular/core';

interface Product {
    id?: string;
    name: string;
    description?: string;
    price: number | null;
    imageUrl: string;
}
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    private _products: any;
    private _createYourOwnPizza: object = {
        id: 0,
        name: 'Crea tu propia pizza',
        description: 'Elige entre nuestras opciones de Designa y crea tu propia pizza.',
        price: null,
        imageUrl: '/assets/img/order-product.png'
    };
    constructor() {
        
    }
    public productForPrice(product: Product): string{
        return new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(product.price ?? 0);
    }
    set products(products: any) {
        this._products = products;
    }
    get products(): any {
        return this._products;
    }
    set createYourOwnPizza(createYourOwnPizza: object) {
        this._createYourOwnPizza = createYourOwnPizza;
    }
    get createYourOwnPizza(): object {
        return this._createYourOwnPizza;
    }
}
