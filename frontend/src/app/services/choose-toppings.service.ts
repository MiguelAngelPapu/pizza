import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Choose {
  id: number;
  choose_category: 'gratis' | 'pago' | 'vegano' | 'sin_gluten' | 'doble_queso';
  name: string;
  price: GLfloat;
  description: string;
  active?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ChooseToppingsService {
  protected url: string = 'http://192.168.1.94:5009/choose';
  public chooses: Choose[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.findChooses().subscribe((res: any) => {
      this.chooses = res.map((choose: any) => ({
        ...choose,
        active: false
      }));
    });   
  }
  public findChooses(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public chooseForPrice(choose: Choose): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(choose.price ?? 0);
}
}
