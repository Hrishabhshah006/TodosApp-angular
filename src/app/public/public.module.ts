import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AllTodosComponent,
    TodoDetailsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AppRoutingModule
  ]
})
export class PublicModule { }
