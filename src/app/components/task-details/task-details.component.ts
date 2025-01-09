import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskStorageService: TaskStorageService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis les paramètres de l'URL
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      // Charger la tâche correspondante
      const tasks = this.taskStorageService.loadTasks();
      this.task = tasks.find(t => t.id === taskId) || null;
    }
  }
}