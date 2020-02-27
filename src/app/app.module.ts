import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppConstants } from './constants/app.constants';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { PropertiesService } from './services/properties.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstants.GOOGLE_MAP_API_KEY
    }),
    HttpClientModule
  ],
  providers: [
    PropertiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
