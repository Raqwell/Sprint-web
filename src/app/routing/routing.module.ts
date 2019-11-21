import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {animation: 'HomePage'}
    },
    {
        path: 'sprints',
        loadChildren: () => import('../sprint/sprint.module').then(mod => mod.SprintModule),
        data: {animation: 'SprintsPage'},
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
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
