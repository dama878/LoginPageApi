import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'not-found',component: NotFoundComponent},
    {path:'**', component: NotFoundComponent, pathMatch: 'full'},
];
