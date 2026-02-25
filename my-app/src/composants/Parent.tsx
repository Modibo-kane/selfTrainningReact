import { Counter } from './Counter'
import style from './Counter.module.css'
import {useState} from 'react';




export const Parent = ( )=>{

   const [initialCount, setInitialCount] = useState(0)

   function handleChangInitialCount (){
      const newInitialCount = Math.floor(Math.random()*100);
      setInitialCount(newInitialCount);
   }

  return (
     <div>
        <Counter initialCount={initialCount}/>
        <button onClick={handleChangInitialCount}>
         Changer la valeur initial
        </button>
     </div>
  )
}