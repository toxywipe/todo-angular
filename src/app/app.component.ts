import { Component, HostListener, OnInit } from '@angular/core';
import { TaskStorageService } from './services/task-storage.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestionnaire de tâches';
  tasks: Task[] = []; // Initialisation des tâches
  menuOpen: boolean = false;

  constructor(private taskStorageService: TaskStorageService) {} // Injection du service

  ngOnInit(): void {
    this.tasks = this.taskStorageService.loadTasks(); // Charger les tâches depuis le service
  }

  markAsCompleted(taskId: string): void {
    const task = this.taskStorageService.getTaskById(taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.taskStorageService.updateTask(task);
      this.tasks = this.taskStorageService.loadTasks();
    }
  }

  // Méthodes pour filtrer et trier (à implémenter)
  filterTasks(): void {
    console.log('Filtrer les tâches');
  }

  sortTasks(): void {
    console.log('Trier les tâches');
  }
}
