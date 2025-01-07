import { Component, OnInit } from '@angular/core';
import { TASKS } from './list-task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gestionnaire de tâches';
  tasks = TASKS;

  markAsCompleted(taskId: string) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = true;
      console.log(`Vous avez terminer la task ${ task.title }`);
    }
  }

  ngOnInit() {
    console.table(this.tasks);
  }
}
