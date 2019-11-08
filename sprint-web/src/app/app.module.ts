import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { HomeComponent } from './models/home/home.component';
import { SprintsComponent } from './models/sprints/sprints.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SprintsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
