import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchCategory{
  all = '',
  Beef = 'Beef',
  Chicken = 'Chicken',
  Dessert = 'Dessert',
  Lamb = 'Lamb',
  Miscellaneous = 'Miscellaneous',
  Pasta = 'Pasta',
  Pork = 'Pork',
  Seafood = 'Seafood',
  Side = 'Side',
  Starter = 'Starter',
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Breakfast = 'Breakfast',
  Goat = 'Goat',
}

@Injectable({
  providedIn: 'root'
})
export class ThemealdbService {
  url = 'www.themealdb.com/api/json/v1/';
  apiKey = '1'

  constructor(private http : HttpClient) { }

  getAll(strMeal : string, category : SearchCategory) : Observable<any> {
    return this.http.get(`${this.url}apikey=${this.apiKey}/search.php?s=${encodeURI(strMeal)}`);
  }

  getById(id : any){
    return this.http.get(`${this.url}apikey=${this.apiKey}/lookup.php?i=${id}`);
  }
}
