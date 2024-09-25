import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllTodosComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
