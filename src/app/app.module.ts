import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './containers/app/app.component';

import components from './components';
import containers from './containers';
import { services } from './services';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { TimesPipe } from './pipes/times/times.pipe';

@NgModule({
  declarations: [
    ...containers,
    ...components,
    InfoBoxComponent,
    TimesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    ...services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
