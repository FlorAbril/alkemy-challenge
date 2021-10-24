import { useContext} from "react"
import { Card, Button, Spinner } from "react-bootstrap"
import { HeroesContext } from "../store/HeroesProvider"
import { ACTIONS } from "../store/HeroesReducer"
import Navbar from "./Navbar"
import { useQueryParams } from "../hooks/useQueryParams"
import useSearchHero from "../hooks/useSearchHero"

export default function SearchResults() {
  const [,dispatch] = useContext(HeroesContext)
  const search = useQueryParams().get('search')
  const {results,loading,error} = useSearchHero(search)


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
        {loading ? 
          <Spinner animation="border" variant="primary" />
        : error ?
          <h4>No hay resultados :(</h4>  
        : results.map(({id,name,image}) =>{
          return(
            <Card style={{width: "12rem"}} key={id}>
              <Card.Img variant="top" src={image.url}/>
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{name}</Card.Title>
                <Button variant="outline-info" onClick={()=>handleClick(id)}>Añadir</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  )
}