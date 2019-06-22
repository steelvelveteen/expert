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
  }

  deleteTask(index): void {
    this.todoList.splice(index, 1);
  }
}
