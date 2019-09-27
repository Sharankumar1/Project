import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankscreenComponent } from './bankscreen/bankscreen.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { Task1Component } from './task1/task1.component';
import { Posts1Component } from './posts1/posts1.component';
import { Album1Component } from './album1/album1.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    BankscreenComponent,
    FormvalidationComponent,
    DashboardComponent,
    TasksComponent,
    PostsComponent,
    AlbumsComponent,
    Task1Component,
    Posts1Component,
    Album1Component,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule ,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
