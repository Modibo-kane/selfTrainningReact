// components/taskItem/TaskItem.tsx
import styles from './TaskItem.module.css';
import type { TaskItemProps } from '../../types';

export const TaskItem = ({ task, index, onDelete, onToggleComplete }: TaskItemProps) => {
  return (
    <li
      className={`${styles.container} ${task.done ? styles.success : styles.default}`}
      onClick={() => onToggleComplete(task.id)}
    >
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>{index + 1}</div>
        <div className={styles.contentDefault}>{task.title}</div>
      </div>
      <button
        className={`${task.done ? "button-success": "button-primary"}`}
        aria-label="supprimer tâche"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        x
      </button>
    </li>
  );
};

