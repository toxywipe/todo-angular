import { Injectable } from '@angular/core';
import { TASKS } from '../list-task';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})

export class TaskStorageService {
  private storageKey = 'tasks';

  // Charger les tâches depuis localStorage
  loadTasks(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  // Sauvegarder les tâches dans localStorage
  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
