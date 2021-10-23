import { useContext} from "react"
import { Card, Button } from "react-bootstrap"
import { HeroesContext } from "../store/HeroesProvider"
import { ACTIONS } from "../store/HeroesReducer"
import Navbar from "./Navbar"

export default function SearchResults() {
  const [state,dispatch] = useContext(HeroesContext)
  const {searchResults} = state
  const {search,results} = searchResults

  const handleClick = (id) =>{
    dispatch({type: ACTIONS.saveHero,
      payload: results.find(hero => hero.id === id)
    })
  }

  return(
    <>
      <Navbar/>
      <h4>Resultados para: {search}</h4>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
        justifyContent: "center",
        margin: "1em 0"
      }}>
        {results.map(({id,name,image}) =>{
          return(
            <Card style={{width: "12rem"}} key={id}>
              <Card.Img variant="top" src={image.url}/>
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{name}</Card.Title>
                <Button variant="outline-info" onClick={(id)=>handleClick(id)}>Añadir</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  )
}