import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ChartPostComponent } from './chart-post/chart-post.component';
import { ChartPostService } from './chart-post/chart-post.service';
import { InfiniteScollerDirective } from './infinite-scoller.directive';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ChartPostComponent,
    InfiniteScollerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChartPostService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }