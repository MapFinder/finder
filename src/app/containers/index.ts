import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const containers = {
  AppComponent,
  HomeComponent,
  MapComponent,
  NotFoundComponent,
};


export default Object.keys(containers).map(key => containers[key]);
