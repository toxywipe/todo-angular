import { Task } from './task';

export const TASKS: Task[] = [
  {
    id: '1',
    title: 'Faire les courses',
    description: 'Acheter du pain, du lait et des œufs.',
    category: 'Personnel',
    priority: 'Moyenne',
    dueDate: new Date('2025-01-10'),
    isCompleted: false
  },
  {
    id: '2',
    title: 'Préparer la réunion',
    description: 'Créer une présentation pour la réunion de lundi.',
    category: 'Travail',
    priority: 'Élevée',
    dueDate: new Date('2025-01-08'),
    isCompleted: false
  }
];
