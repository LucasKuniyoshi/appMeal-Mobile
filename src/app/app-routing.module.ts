import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meals',
    pathMatch: 'full'
  },
  {
    path: 'meals',
    loadChildren: () => import('./view/meals/meals.module').then( m => m.MealsPageModule)
  },
  {
    path: 'meal-details',
    loadChildren: () => import('./view/meal-details/meal-details.module').then( m => m.MealDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
