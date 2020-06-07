import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent';
import { LoginService } from './login/LoginService';

const appRoutes : Route = [
  { path:'new', component: 'HomeComponent'}
];
@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
