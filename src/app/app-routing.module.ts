import { StoryComponent } from './views/story/story.component';
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
    path: "story",
    component: StoryComponent
  },
  {
    path: "pictures",
    component: PicturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
