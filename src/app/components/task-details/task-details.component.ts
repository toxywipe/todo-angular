import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TASKS } from 'src/app/list-task';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  task: Task | undefined; // La tâche actuellement sélectionnée

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    // Récupérer l'ID de la tâche depuis l'URL
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      // Trouver la tâche correspondante dans la liste
      this.task = TASKS.find(t => t.id === taskId);
    }
  }
}