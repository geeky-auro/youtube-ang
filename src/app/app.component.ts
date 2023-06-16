import { Component } from '@angular/core';

import { TODO } from "./todo";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project CC';
  
  todoValue:string="";
  list:TODO[]=[];


  ngOnInit(){
    this.list=[];
    this.todoValue="";
  }

  addItem(){
    if (this.todoValue!=="") {
      const newItem:TODO={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);

    }
    this.todoValue="";
  }

  deleteItem(id:number){
    this.list=this.list.filter(item => item.id!==id);
  }
}
