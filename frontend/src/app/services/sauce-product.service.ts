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
  protected url: string = 'http://192.168.1.94:5009/sauce';
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
}
