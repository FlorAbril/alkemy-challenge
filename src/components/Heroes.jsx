import { useContext } from "react";
import { HeroesContext } from "../store/HeroesProvider";
import HeroCard from "./HeroCard";

export default function Heroes() {
  const [heroes,] = useContext(HeroesContext)
  
  return(
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1em",
      justifyContent: "center",
      margin: "1em 0"
    }}>
      {heroes.length == 0 
        ? 
          <h4>Aún no tienes un equipo</h4>
        : 
        heroes.map(hero =><HeroCard hero={hero}/>)
      }

     
    </div>
  )
}