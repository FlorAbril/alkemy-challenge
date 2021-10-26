import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";
import HeroCard from "./HeroCard";

export default function Heroes() {
  const [{heroesTeam}] = useContext(HeroesContext)

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
        <Alert variant="info">
        <Alert.Heading>Seems like you don't have a team yet</Alert.Heading>
        <p>
          Find and add heroes to your team to start!
        </p>
      </Alert>
        : 
        heroesTeam.map(hero =><HeroCard key={hero.id} hero={hero}/>)
      }

     
    </div>
  )
}