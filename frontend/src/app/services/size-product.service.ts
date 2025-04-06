import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Size {
  id: number;
  name: string;
  slice_area: number;
  slices: number;
  price: number;
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SizeProductService {
  protected url: string = 'http://192.168.1.94:5009/size';
  public sizes: Size[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.findSizes().subscribe((res: any) => {
      this.sizes = res.map((size: any) => ({
        ...size,
        active: false
      }));
    });
  }
  public findSizes(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public sizeView(size: Size ): string{
    return `${size.slice_area} cm² x ${size.slices}`;
  }
  public sizeForPrice(size: Size): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(size.price);
  }
}