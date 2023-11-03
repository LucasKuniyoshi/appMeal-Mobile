import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsPageRoutingModule } from './meals-routing.module';

import { MealsPage } from './meals.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [MealsPage]
})
export class MealsPageModule {}
