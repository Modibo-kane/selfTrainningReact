// ce composant est utilisé pour afficher le champ de saisie de tâche

import styles from './TaskInput.module.css'
import { useState } from 'react'

export const TaskInput = ({onAddTask} : { onAddTask: (task: string) => void })=> {
  
  const [task, setTask] = useState('')
  //const [tasks, setTasks] = useState<string[]>([]); // tableau de tâches

// ----------------------------
  const onSubmit = ( e: React.ChangeEvent<HTMLFormElement> ) =>{
     e.preventDefault(); 
    //setTasks([...tasks, task])
    if (task.trim() !== "") {onAddTask(task) ;/*console.log("moi: "+ task)*/};
    setTask("");
  }
// ----------------------------
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter ta prochaine tâche </h2>
      <form className={styles.contenaire} onSubmit={onSubmit}>
        <input
          type="text"
          name="taskInput"
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Indiquez un titre de tâche explicite'
        />
        <button className='button-primary' type='submit' >
          Ajouter
        </button>
      </form>
    </div>
  )
}