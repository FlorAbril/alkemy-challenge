import { useContext, useState} from "react"
import { Spinner, OverlayTrigger } from "react-bootstrap"
import { HeroesContext } from "../store/HeroesProvider"
import Navbar from "./Navbar"
import { useQueryParams } from "../hooks/useQueryParams"
import useSearchHero from "../hooks/useSearchHero"
import HeroCardSearch from "./HeroCardSearch"

export default function SearchResults() {
  const [state] = useContext(HeroesContext)
  const search = useQueryParams().get('search')
  const {results,loading,error} = useSearchHero(search)
  console.log(state);
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
        : results.map((hero) =>{
          return(
            <HeroCardSearch key={hero.id} hero={hero}/>
          )
        })}
      </div>
    </>
  )
}