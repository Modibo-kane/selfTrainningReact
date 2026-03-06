// components/taskList/TaskList.tsx
import { TaskItem } from '../taskItem/TaskItem';
import styles from './TaskListe.module.css';
import type { TaskListProps } from '../../types';

export const TaskList = ({ tasks, onDelete, onToggleComplete }: TaskListProps) => {
  const incompleteTasksCount = tasks.filter(task => !task.done).length;

  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reste encore {incompleteTasksCount} tâche{incompleteTasksCount > 1 ? 's' : ''} à accomplir !
      </h2>
      <ul className="container">
        {tasks
          .map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
      </ul>
    </div>
  );
};

