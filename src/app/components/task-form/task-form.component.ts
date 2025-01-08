import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TASKS } from 'src/app/list-task';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Task = {
    id: '', // ID sera généré automatiquement
    title: '',
    description: '',
    category: '',
    priority: 'Moyenne', // Donner une valeur par défaut valide
    dueDate: new Date(), // Initialiser avec une date valide
    isCompleted: false
  };
  
  onDueDateChange(event: any) {
    this.newTask.dueDate = new Date(event.target.value);
  }  

  constructor(private router: Router) {}

  onSubmit() {
    // Générer un ID unique pour la tâche
    this.newTask.id = (TASKS.length + 1).toString();

    // Ajouter la tâche à la liste
    TASKS.push({ ...this.newTask });

    // Rediriger vers la liste des tâches
    this.router.navigate(['/tasks']);
  }
}
