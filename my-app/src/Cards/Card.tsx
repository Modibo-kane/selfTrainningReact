import style from './Card.module.css'

type CardType = {
  name: string;
  age: number;
  genre: string;
  etudiant: boolean;
  situation:string
}

export function Card( {name, age, genre, etudiant,situation}: CardType){

   const cardEtudiant = etudiant ? "Oui" : "Non" 
   const cardbackground = style[`${genre}`] ? style[`${genre}`] : style.neutre; 

  return (
    <div className={`${style.cardInfos} ${cardbackground}`}>
      <h1>Informations</h1>
      <p>Nom & Prénom: <span>{name}</span> </p>
      <p>Age: <span>{age}</span> </p>
      <p>Genre: <span>{genre}</span> </p>
      <p>Etudiant: <span>{cardEtudiant}</span> </p>
      <p>Situation: <span>{situation}</span> </p>
    </div>
  )
}