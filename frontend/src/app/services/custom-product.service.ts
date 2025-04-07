import { Injectable } from '@angular/core';
import { SizeProductService } from './size-product.service';
import { CrustProductService } from './crust-product.service';
import { ToppingProductService } from './topping-product.service';
import { SauceProductService } from './sauce-product.service';
import { ChooseToppingsService } from './choose-toppings.service';
import { CreateProductService } from './create-product.service';


@Injectable({
  providedIn: 'root'
})
export class CustomProductService {
  public selectParts: true | false = true;
  public customViews: 'create-pizza' | 'left-half' | 'right-half' = 'create-pizza';
  public page: 1 | 2 = 1;
  public shopping: Array<any> = [];
  public total: number = 0;

  public custom = {
    size: 1 as number | null,
    crust: 1 as number | null,
    topping: 1 as number | null,
    'left-half': {
      sauce: 2 as number | null,
      choose: [1, 2]
    },
    'right-half': {
      sauce: 2 as number | null,
      choose: [1, 2]
    }
  };
  constructor(
    public sizeProductService: SizeProductService,
    public crustProductService: CrustProductService,
    public toppingProductService: ToppingProductService,
    public sauceProductService: SauceProductService,
    public chooseToppingsService: ChooseToppingsService,
    public createProductService: CreateProductService
  ) { }

  public calculateTotalInCart(): string {
    const parts = this.getPartsForCalculation(); 
    this.total = this.calculateTotal(parts); ;
    return this.formatCurrency(this.total);
  }

  private getPartsForCalculation(): Array<{ collection: Array<any>, id: number | null }> {
    const leftHalfParts = this.custom['left-half'].choose.map(id => ({ collection: this.chooseToppingsService.chooses, id }));
    const rightHalfParts = this.custom['right-half'].choose.map(id => ({ collection: this.chooseToppingsService.chooses, id }));

    return [
      { collection: this.sizeProductService.sizes, id: this.custom.size },
      { collection: this.crustProductService.crusts, id: this.custom.crust },
      { collection: this.toppingProductService.toppingStyles, id: this.custom.topping },
      { collection: this.sauceProductService.sauces, id: this.custom['left-half'].sauce },
      { collection: this.sauceProductService.sauces, id: this.custom['right-half'].sauce },
      ...leftHalfParts,
      ...rightHalfParts
    ];
  }

  private calculateTotal(parts: Array<{ collection: Array<any>, id: number | null }>): number {
    return parts.reduce((sum, part) => sum + this.getItemPrice(part.collection, part.id), 0);
  }

  private getItemPrice(collection: Array<any>, id: number | null): number {
    const item = collection.find(item => item.id === id);
    return item ? item.price : 0;
  }

  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }
}
