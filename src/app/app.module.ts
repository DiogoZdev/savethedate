import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { StoryComponent } from './views/story/story.component';
import { AboutherComponent } from './views/abouther/abouther.component';
import { AbouthimComponent } from './views/abouthim/abouthim.component';
import { MapsComponent } from './views/maps/maps.component';
import { DonateComponent } from './views/donate/donate.component';
import { SettingsComponent } from './views/settings/settings.component';
import { PicturesComponent } from './views/pictures/pictures.component';
import { CarouselComponent } from './views/pictures/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    StoryComponent,
    AboutherComponent,
    AbouthimComponent,
    MapsComponent,
    DonateComponent,
    SettingsComponent,
    PicturesComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
