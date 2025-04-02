import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  findApi(): Observable<any> {
    return this.http.post(`${this.apiUrl}`, {});
  }
}
