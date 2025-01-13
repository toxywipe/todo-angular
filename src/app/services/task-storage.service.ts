import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})

export class TaskStorageService {
  tasks: Task[] = []; // Liste des tâches

  constructor() {
    this.loadTasks(); // Charger les tâches au démarrage
  }

loadTasks(): Task[] {
    // Charger les tâches depuis localStorage
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    return this.tasks;
  }

  saveTasks(): void {
    // Sauvegarder les tâches dans localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(newTask: Task): void {
    // Ajouter une nouvelle tâche et sauvegarder
    this.tasks.push(newTask);
    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    // Mettre à jour une tâche existante et sauvegarder
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasks();
    }
  }

  deleteTask(taskId: string): void {
    // Supprimer une tâche par ID et sauvegarder
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  getTaskById(taskId: string): Task | undefined {
    return this.tasks.find(task => task.id === taskId);
  }
  
}
