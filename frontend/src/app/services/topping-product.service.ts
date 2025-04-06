import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Topping {
  id: number;
  name: string;
  image_url: string;
  price: number;
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ToppingProductService {
  protected url: string = 'http://192.168.1.94:5009/topping';

  public toppingStyles: Topping [] = [];
  constructor(
    private http: HttpClient
  ) { 
    this.findToppingStyles().subscribe((res: any) => {
      this.toppingStyles = res.map((topping: any) => ({
        ...topping,
        active: false
      }));
    }
    );
  }
  public findToppingStyles(): Observable<any> {
      return this.http.get(`${this.url}`);
  }
  public toppingForPrice(topping: Topping): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(topping.price);
  }
}
