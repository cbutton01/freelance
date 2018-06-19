import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LocationsComponent } from './locations/locations.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    WelcomeComponent,
    NavMenuComponent,
    LocationsComponent,
    NewsComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
