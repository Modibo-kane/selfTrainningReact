// hooks/useTasks.ts
import { useState, useCallback } from 'react';
import type { Task } from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((title: string) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      done: false,
      createdAt: new Date(),
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const toggleTaskComplete = useCallback((id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }, []);

  const getIncompleteTasksCount = useCallback(() => {
    return tasks.filter(task => !task.done).length;
  }, [tasks]);

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskComplete,
    getIncompleteTasksCount,
  };
};