import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Sauce {
  id: number;
  name: string;
  price: number;
  active?: boolean;
};
@Injectable({
  providedIn: 'root'
})
export class SauceProductService {
  protected url: string = 'http://192.168.1.94:5009/api/sauce';
  public sauces: Sauce[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.findSauces().subscribe((res: any) => {
      this.sauces = res.map((sauce: any) => ({
        ...sauce,
        active: false
      }));
    });
  }
  public findSauces(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public sauceForPrice(sauce: Sauce): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(sauce.price);
  }
}
