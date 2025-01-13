import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;

constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.params['id']; // Récupère l'ID de la route
    this.loadTask(taskId);
  }

  loadTask(taskId: string): void {
    // Récupération des tâches depuis localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Recherche de la tâche avec l'ID correspondant
    this.task = tasks.find((t: any) => t.id === taskId);

    if (!this.task) {
      console.error('Tâche introuvable.');
    }
  }
}