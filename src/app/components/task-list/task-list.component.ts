import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { TASKS } from 'src/app/list-task';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = TASKS;

  constructor(private taskStorageService: TaskStorageService) {}

  ngOnInit(): void {
    // Charger les tâches depuis localStorage au démarrage
    this.tasks = this.taskStorageService.loadTasks();
    console.table(this.tasks);
  }

  // Ajouter une méthode pour sauvegarder les tâches à chaque modification
  saveTasks(): void {
    this.taskStorageService.saveTasks(this.tasks);
  }

  // Exemple de bascule d'état de tâche
  toggleTaskCompletion(taskId: string): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.saveTasks(); // Sauvegarder après modification
    }
  }

  // Exemple de suppression de tâche
  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks(); // Sauvegarder après suppression
  }

  showTaskDetails(task: Task) {
    console.log('Détails de la tâche :', task);
    // Naviguer vers une autre page ou ouvrir un pop-up
  }
}
