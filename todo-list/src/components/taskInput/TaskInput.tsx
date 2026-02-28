// ce composant est utilisé pour afficher le champ de saisie de tâche

import { useState } from 'react';
import styles from './TaskInput.module.css'
import type {addTaskType} from '../types/TasksType'


export const TaskInput = ({addTask}: addTaskType)=> {

  const [taskTitle, setTaskTitle]= useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskTitle(e.target.value);
  }

  const handlAddTask = (e:  React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.trim()){
      addTask(taskTitle);
      setTaskTitle("");
    }
  }

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter ta prochaine tâche </h2>
      <form className={styles.contenaire} onSubmit={handlAddTask}>
        <input type="text" value={taskTitle} className={styles.input}
        onChange={handleInputChange} placeholder='Indiquez un titre de tâche explicite' />
        <button className='button-primary' type='submit'>
          Ajouter
        </button>
      </form>
    </div>
  )
}