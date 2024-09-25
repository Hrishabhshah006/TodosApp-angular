import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { PublicComponent } from './public.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';


const routes: Routes = [
  { path: 'public', component: PublicComponent, children: [
    {path: 'all-todos', component:AllTodosComponent},
    {path: 'home', component: HomeComponent},
    {path: 'todo-details/:id',component:TodoDetailsComponent}
  ] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
