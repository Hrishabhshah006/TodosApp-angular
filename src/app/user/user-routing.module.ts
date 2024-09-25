import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { DeleteTodoComponent } from './component/delete-todo/delete-todo.component';

const routes: Routes = [
  {path:"user",component:UserComponent,children:[
      {path:"add-todo",component:AddTodoComponent},
      {path:"delete-todo",component:DeleteTodoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
