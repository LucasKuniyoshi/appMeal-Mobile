import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemealdbService } from 'src/app/services/themealdb.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  info : any;

  constructor(private actRoute : ActivatedRoute, private themeal : ThemealdbService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.themeal.getById(id).subscribe(result => this.info = result);
  }

}
