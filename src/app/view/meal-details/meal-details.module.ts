import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealDetailsPageRoutingModule } from './meal-details-routing.module';

import { MealDetailsPage } from './meal-details.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealDetailsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [MealDetailsPage]
})
export class MealDetailsPageModule {}
