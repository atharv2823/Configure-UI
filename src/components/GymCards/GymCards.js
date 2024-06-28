import "./GymCards.css"
import {  Gyminfo ,theme , ConfigureSite} from "./../../data"

function GymCards({id , title, image , phone, website ,premium ,heading ,description}) {
  return (
   <>
   <div className="cards-body">

   <div className="Site heading">{heading}</div>
   <div className="site-discription">{description}</div>

   <div className="card-title" style={{backgroundColor: theme.primary}}>{title}</div>

   <img src= {image} className="gym-image" />

   <p className="phone-no">Contact :-{phone}</p> 

   <p className="email">Email :-{website}</p>

   <h3 className="premium">Price :-{premium}</h3>

   </div>
   
   </>
  )
}

export default GymCards