import { Component } from '@angular/core';
import { TASKS } from 'src/app/list-task';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = TASKS;

  markAsCompleted(taskId: string) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = true;
    }
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  showTaskDetails(task: Task) {
    console.log('Détails de la tâche :', task);
    // Naviguer vers une autre page ou ouvrir un pop-up
  }
}
