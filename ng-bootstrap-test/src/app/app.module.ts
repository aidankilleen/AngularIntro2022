import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { CarouselPageComponent } from './carousel-page/carousel-page.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AlertsPageComponent,
    CarouselPageComponent,
    BootstrapNavbarComponent,
    UserListPageComponent,
    UserDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
