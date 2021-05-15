import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'donegal',
    loadChildren: () => import('./donegal/donegal.module').then( m => m.DonegalPageModule)
  },
  {
    path: 'paris',
    loadChildren: () => import('./paris/paris.module').then( m => m.ParisPageModule)
  },
  {
    path: 'athens',
    loadChildren: () => import('./athens/athens.module').then( m => m.AthensPageModule)
  },
  {
    path: 'rome',
    loadChildren: () => import('./rome/rome.module').then( m => m.RomePageModule)
  },
  {
    path: 'areas',
    loadChildren: () => import('./areas/areas.module').then( m => m.AreasPageModule)
  },
  {
    path: 'donegal-attractions',
    loadChildren: () => import('./donegal-attractions/donegal-attractions.module').then( m => m.DonegalAttractionsPageModule)
  },
  {
    path: 'donegal-flights',
    loadChildren: () => import('./donegal-flights/donegal-flights.module').then( m => m.DonegalFlightsPageModule)
  },
  {
    path: 'donegal-weather',
    loadChildren: () => import('./donegal-weather/donegal-weather.module').then( m => m.DonegalWeatherPageModule)
  },
  {
    path: 'paris-attractions',
    loadChildren: () => import('./paris-attractions/paris-attractions.module').then( m => m.ParisAttractionsPageModule)
  },
  {
    path: 'paris-flights',
    loadChildren: () => import('./paris-flights/paris-flights.module').then( m => m.ParisFlightsPageModule)
  },
  {
    path: 'paris-weather',
    loadChildren: () => import('./paris-weather/paris-weather.module').then( m => m.ParisWeatherPageModule)
  },
  {
    path: 'athens-attractions',
    loadChildren: () => import('./athens-attractions/athens-attractions.module').then( m => m.AthensAttractionsPageModule)
  },
  {
    path: 'athens-flights',
    loadChildren: () => import('./athens-flights/athens-flights.module').then( m => m.AthensFlightsPageModule)
  },
  {
    path: 'athens-weather',
    loadChildren: () => import('./athens-weather/athens-weather.module').then( m => m.AthensWeatherPageModule)
  },
  {
    path: 'rome-attractions',
    loadChildren: () => import('./rome-attractions/rome-attractions.module').then( m => m.RomeAttractionsPageModule)
  },
  {
    path: 'rome-flights',
    loadChildren: () => import('./rome-flights/rome-flights.module').then( m => m.RomeFlightsPageModule)
  },
  {
    path: 'rome-weather',
    loadChildren: () => import('./rome-weather/rome-weather.module').then( m => m.RomeWeatherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
