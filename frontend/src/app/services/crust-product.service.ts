import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Crust{
  id: number;
  name: string;
  price?: number;
  active?: boolean;
};
@Injectable({
  providedIn: 'root'
})
export class CrustProductService {
  protected url: string = 'http://192.168.1.94:5009/crust';
  public crusts: Crust[] = [];
  constructor(
    private http: HttpClient
  ) { 
    this.findCrusts().subscribe((res: any) => {
      this.crusts = res.map((crust: any) => ({
        ...crust,
        active: false
      }));
    });
  }

  public findCrusts(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public crustForPrice(crust: Crust): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(crust.price ?? 0);
  }
}
