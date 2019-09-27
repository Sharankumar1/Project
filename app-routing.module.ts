import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankscreenComponent } from './bankscreen/bankscreen.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { Task1Component } from './task1/task1.component';
import { Posts1Component } from './posts1/posts1.component';
import { Album1Component } from './album1/album1.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  {path:'bankscreen',component:BankscreenComponent},
  {path:'',component:FormvalidationComponent},
  {path:'formvalidation',component:FormvalidationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tasks',component:TasksComponent},
  {path:'posts',component:PostsComponent},
  {path:'album',component:AlbumsComponent},
  {path:'task1',component:Task1Component},
  {path:'posts1',component:Posts1Component},
  {path:'album1',component:Album1Component},
  {path:'image',component:ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
