export type addTaskType = {
  addTask: (task: string) => void
}

export type TaskType = {
  id: number;
  title?: string;
  completed?: boolean
}

export type TaskListeType = {
  liste : TaskType[]
  edit: (task: TaskType) => void
  onDelete: (task: TaskType) => void
  unCompleted?: number
}