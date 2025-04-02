import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    private _products: any;
    private _createYourOwnPizza: object = {
        id: 0,
        name: 'Create Your Own Pizza',
        description: 'Choose From Our Options Of Designa And Make Your Own Pizza.',
        price: null,
        imageUrl: '/assets/img/order-product.png'
    };
    constructor() {
        
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
