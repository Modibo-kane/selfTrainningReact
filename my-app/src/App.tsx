import { useEffect } from 'react'
import './App.css'
import { Parent } from './composants/Parent'


function App(){
  useEffect(() =>{
  const timer = setInterval(()=>{
    console.log("timer éxécuter");
  }, 1000);

  //Nettoyage
  return ()=>{
    clearInterval(timer);
    console.log("composant démonté")
  }

}, []);
  return (
    <div>
      <Parent/>
      
    </div>
  )
}

export default App
