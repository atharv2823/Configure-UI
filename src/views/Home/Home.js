import "./Home.css"
import { Gyminfo } from "./../../data"
import GymCards from "../../components/GymCards/GymCards"

function Home() {
  return (
    <>
    <div className="gym-title">Indian Fitness</div>

    <div className="Gymcards-container">
        {
            Gyminfo.map((gymObject , i)=> {
                const {
                    id,
                    title,
                    image,
                    phone,
                    website,
                    premium ,
                    heading,
                    description
                } = gymObject

                return (
                    <GymCards
                    key = {i}
                    id = {id}
                    title = {title}
                    image = {image}
                    phone = {phone}
                    website = {website}
                    premium = {premium}
                    heading = {heading}
                    description = {description}
                    />
                )
            })
        }
        </div>
    </>
  )
}

export default Home