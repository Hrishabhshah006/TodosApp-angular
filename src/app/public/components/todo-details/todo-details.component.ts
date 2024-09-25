import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent  implements OnInit{
  public todoId:number=0;
  constructor(private route:ActivatedRoute){
  
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(param=>{
      console.log(param);
      this.todoId=param["id"];
      console.log(param["id"]);
    })
  }
}
