import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskStorageService: TaskStorageService) {}

  ngOnInit(): void {
    // Charger les tâches depuis localStorage au démarrage
    this.tasks = this.taskStorageService.loadTasks();
    console.table(this.tasks);
  }

  deleteTask(taskId: string): void {
    // Supprimer la tâche via le service
    this.taskStorageService.deleteTask(taskId);

    // Recharger les tâches pour synchroniser avec le service
    this.tasks = this.taskStorageService.loadTasks();
  }

  toggleTaskCompletion(taskId: string): void {
    // Trouver la tâche et changer son statut
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;

      // Sauvegarder les changements dans le service
      this.taskStorageService.saveTasks();
    }
  }
}
