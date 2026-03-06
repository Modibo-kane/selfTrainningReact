import type { Task } from '../../types';
import styles from './Footer.module.css';

export const Footer = ({ tableTasks }: { tableTasks: Task[] }) => {
  return (
    <footer>
      <code className={styles.footer}>
        Avec TaskFlow tu as éliminé {tableTasks.filter(task => task.done).length} tâches
      </code>
    </footer>
  );
};