import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { CarouselPageComponent } from './carousel-page/carousel-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomePageComponent }, 
  { path: 'alerts', component: AlertsPageComponent }, 
  { path: 'carousel', component: CarouselPageComponent }, 
  { path: 'users', component: UserListPageComponent }, 
  { path: 'users/:id', component: UserDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
