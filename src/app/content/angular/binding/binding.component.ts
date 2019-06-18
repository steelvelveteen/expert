import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  todoList: string[] = ['Shopping', 'Training', 'Bunging', 'Weekend trip'];
  constructor() { }

  ngOnInit() {
    this.todoList.forEach(task => console.log(task));
  }

  deleteTask(index): void {
    console.log(index);
    delete this.todoList[index];
    this.todoList.forEach(task => console.log(task));
  }
}
