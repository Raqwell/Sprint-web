import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../models/home/home.component';
import { SprintsComponent } from '../models/sprints/sprints.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { ProfileComponent } from '../models/profile/profile.component';
import { RegisterComponent } from '../models/register/register.component';
import { LoginComponent } from '../models/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'sprints', component: SprintsComponent, data: {animation: 'SprintsPage'}, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
