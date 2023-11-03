import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ThemealdbService, SearchCategory } from 'src/app/services/themealdb.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  result! : Observable<any>;
  searchTerms : string = '';
  category : SearchCategory = SearchCategory.all;

  constructor(private themeal : ThemealdbService) { }

  search(){
    this.result = this.themeal.getAll(this.searchTerms, this.category)
    .pipe(map(results => results['Search']));
  }

  ngOnInit() {
  }

}
