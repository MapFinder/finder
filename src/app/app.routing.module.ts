import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { containers } from './containers';
const {
  HomeComponent,
  MapComponent,
  NotFoundComponent
} = containers;

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: '**',
    component:  NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
