import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CategiriesService {
    protected url: string = 'http://192.168.1.94:5009/category';
    private _categories: Array<any> = [
        { id: 0, name: 'All', route: '#', active: true },
    ];
    private _categorie: string = 'all';
    constructor(private http: HttpClient) {
        
    }
    findCategories(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
    searchCategoryById(id: number | string): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }
    set categories(categories: Array<any>) {
        this._categories.push(...categories)
    }
    get categories(): Array<any> {
        return this._categories;
    }
    set categorie(categorie: string) {
        const categories = this.categories.map((category: any) => {
            if (category.active) delete category.active;

            if (categorie.toLowerCase().replaceAll(" ", "-") == category.name.toLowerCase().replaceAll(" ", "-")) category.active = true;
            return category;
        })
        this._categories = categories;
        this._categorie = categorie.toLowerCase()
    }
    get categorie(): string {
        return this._categorie;
    }
}
