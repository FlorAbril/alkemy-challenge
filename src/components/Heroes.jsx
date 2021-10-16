import HeroCard from "./HeroCard";

export default function Heroes() {
  const heroes = [
    {
      id: "414",
      name: "Loki",
      powerstats: {
          intelligence: "88",
          strength: "63",
          speed: "46",
          durability: "85",
          power: "100",
          combat: "60"
      }
    }
  ]
  
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