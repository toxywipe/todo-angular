import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskStorage: TaskStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.task = this.taskStorage.getTaskById(taskId);
      if (!this.task) {
        alert('Tâche introuvable !');
        this.router.navigate(['/tasks']);
      }
    }
  }

  onSubmit(): void {
    if (this.task) {
      this.taskStorage.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}