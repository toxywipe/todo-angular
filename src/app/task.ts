export interface Task {
    id: string;
    title: string;
    description?: string;
    category: string;
    priority: 'Élevée' | 'Moyenne' | 'Faible';
    dueDate: Date;
    isCompleted: boolean;
  }
  