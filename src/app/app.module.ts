import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { HomeComponent } from './models/home/home.component';
import { SprintsComponent } from './models/sprints/sprints.component';
import { ProfileComponent } from './models/profile/profile.component';
import { RegisterComponent } from './models/register/register.component';
import { LoginComponent } from './models/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SprintsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
