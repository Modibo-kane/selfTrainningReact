import style from './Counter.module.css'
import {useState, useEffect} from 'react';

type initialCountType  = {initialCount: number}

export const Counter = ({initialCount}: initialCountType )=>{

  const [count, setCount] = useState(initialCount);

  // 🔑 Synchroniser count avec initialCount quand il change
   useEffect(() => { 
        setCount(initialCount); 
      }, [initialCount]);

  const increment =()=> setCount(count + 1)
  const reset =()=> setCount(0)
  const decrement =()=> count > 0 ? setCount(count - 1) : setCount(count)

  return (
     <div className={style.counterContainer}>
        <h1>compteur {count}</h1>
        <div className={style.butonContenanire}>
            <button className={style.buttonAdd} onClick={increment}>+</button>
            <button className={style.buttonSub} onClick={decrement}>-</button>
            <button className={style.buttonReset} onClick={reset}>reset</button>
        </div>
     </div>
  )
}