import { Component } from '@angular/core';

import { TODO } from "./todo";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project CC';
  todoValue:string;
  list:TODO[];

  constructor(){
    this.todoValue="";
    this.list=[];
  }


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

/**
 * 
 * Within the callback function, item refers to each individual item in the list array. The expression item.id!==id compares the id property of each item with the id parameter passed to the deleteItem() method.

If the id of the current item is not equal to the id parameter, the callback function returns true, indicating that the item should be kept in the filtered array.

If the id of the current item is equal to the id parameter, the callback function returns false, indicating that the item should be excluded from the filtered array.

The filter() method creates a new array with all the items that passed the condition (item.id!==id), effectively removing the item with the matching id from the list array.

Finally, the list array is updated with the filtered array, effectively removing the item from the original array.
 */
  
  deleteItem(id:number){
    this.list=this.list.filter(item => item.id!==id);
  }
}
