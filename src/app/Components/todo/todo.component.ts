import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TODOComponent {
  Title: string = 'To DO List Application';
  imageLink: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulVUqBF35rVHIZIa2ORZuphkoE_E0eZ5GqA&s';
  tasks: string[] = [];
  newTask: string = '';
  addTask() {
    if (this.newTask !== '') {
      this.tasks.push(this.newTask);
    }
  }
}
