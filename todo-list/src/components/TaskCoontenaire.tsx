// ce composant est utilisé pour afficher l'intégralité du contenu de Task

import { useState } from "react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { TaskInput } from "./taskInput/TaskInput"
import { TaskListe } from "./taskList/TaskListe"
import type { TaskType } from "./types/TasksType"

export const TaskContenaire = () =>{

  const [tasksList, setTasksList] = useState<TaskType[]>([])

  const addTasks = (title: string) =>{
    const newTask = {
      id:tasksList.length + 1,
      title: title,
      completed: false,
    }

    setTasksList([...tasksList, newTask])
  }

  const editTask = ({id, completed}: TaskType) =>{
    setTasksList(
      tasksList.map((task)=> 
        task.id === id ? {...task, completed: completed} : task
      )
    )
  }

  const deleteTask = ({id}: TaskType) => {
    setTasksList(tasksList.filter((task)=> task.id !== id))
  }

  const getTaskCounts = ()=>{
    const completedTask = tasksList.filter(task => task.completed).length
    const unCompletedTask = tasksList.length - completedTask;

    return {
      completedTask, unCompletedTask
    }
  }

  const {completedTask, unCompletedTask} = getTaskCounts()

  console.log(`complete: ${completedTask}\n incomplete: ${unCompletedTask} `)

  return ( 
    <main>
      <Header />
      <TaskInput addTask={addTasks}/>
      <TaskListe  
      liste= {tasksList} 
      edit={editTask} 
      onDelete={deleteTask} 
      unCompleted ={unCompletedTask} />
      <Footer></Footer>
    </main>
  )
}