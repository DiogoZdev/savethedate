import { SettingsComponent } from './views/settings/settings.component';
import { MapsComponent } from './views/maps/maps.component';
import { StoryComponent } from './views/story/story.component';
import { AboutherComponent } from './views/abouther/abouther.component';
import { AbouthimComponent } from './views/abouthim/abouthim.component';
import { DonateComponent } from './views/donate/donate.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturesComponent } from './views/pictures/pictures.component';


const routes: Routes = [
  {
    path: "",
    component:  HomeComponent
  },
  {
    path: "abouthim",
    component: AbouthimComponent
  },
  {
    path: "abouther",
    component: AboutherComponent
  },
  {
    path: "story",
    component: StoryComponent
  },
  {
    path: "map",
    component: MapsComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "gifts",
    component: DonateComponent
  },
  {
    path: "pictures",
    component: PicturesComponent
  }
];

// <li routerlink="/">home</li>
//         <li routerlink="abouther">about her</li>
//         <li routerlink="abouthim">about him</li>
//         <li routerlink="story">our story</li>
//         <li routerlink="map">maps</li>
//         <li routerlink="donate">donate</li>
//         <li routerlink="settings">settings</li>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
