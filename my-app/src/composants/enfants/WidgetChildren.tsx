import style from './WidgetChildren.module.css';

export function NotificationWidget(){
  return (
    <div className={style.widget}>
      <h2>Notification</h2>
      <p>Vous avez <span className={style.highlight}>5</span> Notifications</p>
    </div>
  )
}

export function TastWidget(){
  return (
    <div className={style.widget}>
      <h2>Tasks</h2>
      <p>Vous avez  <span className={style.highlight}>7</span> missions à faire</p>
    </div>
  )
}

export function StatWidget(){
  return (
    <div className={style.widget}>
      <h2>Stats</h2>
      <p>Vous avez accomplit <span className={style.highlight}>10</span> missions </p>
    </div>
  )
}