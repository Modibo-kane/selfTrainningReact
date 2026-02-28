//  ce composant es utlisé pour afficher la liste des tâches

import {TaskItem} from '../taskItem/TaskItem'
import styles from './TaskListe.module.css'
import type {TaskListeType} from '../types/TasksType';



export const TaskListe = ({liste, unCompleted, edit, onDelete}: TaskListeType) => {

  const tasklist = liste.map(task => (
    <TaskItem key={task.id} edit = {edit}/>
  ))

  return (
    <div className="box">
        <h2 className={styles.title}>
           Il te reste encore {unCompleted} tâches à accomplir ! 
    </h2>
    
      {
        liste && liste.length > 0 ? (
          <ul className={styles.container}>
             {tasklist}
          </ul>
        ) : null
      }
         
    </div>
  )
}

