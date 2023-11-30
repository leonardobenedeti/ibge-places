import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'uf-list',
    pathMatch: 'full'
  },
  {
    path: 'uf-list',
    loadChildren: () => import('./pages/uf-list/uf-list.module').then(m => m.UfListPageModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./pages/cities/cities.module').then(m => m.CitiesPageModule)
  },
  {
    path: 'city-details',
    loadChildren: () => import('./pages/city-details/city-details.module').then(m => m.CityDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
