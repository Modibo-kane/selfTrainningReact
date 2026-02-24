import { Counter } from './Counter'
import style from './Counter.module.css'


export const Parent = ( )=>{

  return (
     <div>
        <Counter initialCount = {100}/> <br />
        <Counter initialCount = {55}/>
     </div>
  )
}