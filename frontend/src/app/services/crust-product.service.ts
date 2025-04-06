import { Injectable } from '@angular/core';

interface Crust{
  id: number;
  name: string;
  extraPrice?: number;
  active?: boolean;
};
@Injectable({
  providedIn: 'root'
})
export class CrustProductService {
  public crusts = [
      { id: 1, name: 'Corteza clásica', extraPrice: 0, active: true },
      { id: 2, name: 'Corteza italiana', extraPrice: 4000 }
  ];
  constructor() { }

  public crustForPrice(crust: Crust): string{
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(crust.extraPrice ?? 0);
  }
}
