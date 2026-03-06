// components/TaskContainer.tsx
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { TaskInput } from "./taskInput/TaskInput";
import { TaskList } from "./taskList/TaskListe";
import { useTasks } from "../hooks/useTasks";

export const TaskContainer = () => {
  const { tasks, addTask, deleteTask, toggleTaskComplete } = useTasks();

  return (
    <main>
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleTaskComplete}
      />
      <Footer tableTasks={tasks} />
    </main>
  );
};
