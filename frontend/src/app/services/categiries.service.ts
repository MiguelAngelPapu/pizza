import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CategiriesService {
    protected url: string = 'http://192.168.1.94:5009/category';
    public categories: Array<any> = [
        { id: 0, name: 'Todos', active: true },
    ]
    constructor(private http: HttpClient) {
        this.findCategories().subscribe((res: any) => {
            this.categories.push(...res.map((category: any) => ({
                ...category,
                active: false
            })));
        });
    }
    findCategories(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
    searchCategoryById(id: number | string): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

}
