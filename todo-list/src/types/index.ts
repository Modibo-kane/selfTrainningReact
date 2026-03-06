// types/index.ts
export interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt?: Date;
}

// types/components.ts
export interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export interface TaskItemProps {
  task: Task;
  index: number;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}