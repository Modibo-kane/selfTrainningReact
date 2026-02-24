import { NotificationWidget, StatWidget, TastWidget } from '../enfants/WidgetChildren';
import style from './Dashbord.module.css';

export function Dashbord(){
  return (
    <div className ={style.dashbord}>
      <h1>
        Dashboard
      </h1>
      <p className ={style.subTitle}> Statisque réel de l'application</p>
      <div className= {style.widgetsContenair}>
        <NotificationWidget/>
        <StatWidget />
        <TastWidget/>
      </div>
    </div>
  )
}