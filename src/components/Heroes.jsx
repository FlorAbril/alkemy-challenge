import { useContext } from "react";
import { HeroesContext } from "../store/HeroesProvider";
import HeroCard from "./HeroCard";

export default function Heroes() {
  const [state,] = useContext(HeroesContext)
  const {heroesTeam} = state

  return(
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1em",
      justifyContent: "center",
      margin: "1em 0"
    }}>
      {heroesTeam.length === 0 
        ? 
          <h4>Aún no tienes un equipo</h4>
        : 
        heroesTeam.map(hero =><HeroCard hero={hero}/>)
      }

     
    </div>
  )
}