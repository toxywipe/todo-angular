import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Partial<Task> = {}; // Pour stocker les données du formulaire

  constructor(
    private taskStorageService: TaskStorageService,
    private router: Router
  ) {}

  // Gérer le changement de la date limite
  onDueDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newTask.dueDate = input.valueAsDate!;
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (!this.newTask.title || !this.newTask.category || !this.newTask.priority || !this.newTask.dueDate) {
      return; // Assurez-vous que toutes les données obligatoires sont présentes
    }

    // Ajouter un ID unique et initialiser isCompleted
    const task: Task = {
      ...this.newTask,
      id: Math.random().toString(36).substring(2, 15), // Génère un ID unique
      isCompleted: false,
    } as Task;

    // Charger les tâches existantes et ajouter la nouvelle tâche
    const tasks = this.taskStorageService.loadTasks();
    tasks.push(task);

    // Sauvegarder dans localStorage
    // this.taskStorageService.saveTasks(tasks);
    this.taskStorageService.saveTasks();

    // Rediriger vers la liste des tâches
    this.router.navigate(['/tasks']);
  }
}
