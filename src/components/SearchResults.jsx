import { useContext} from "react"
import { Spinner, OverlayTrigger, Alert, Row, Col } from "react-bootstrap"
import { HeroesContext } from "../store/HeroesProvider"
import Navbar from "./Navbar"
import { useQueryParams } from "../hooks/useQueryParams"
import useSearchHero from "../hooks/useSearchHero"
import HeroCardSearch from "./HeroCardSearch"
import { Link } from "react-router-dom"

export default function SearchResults() {
  const [state] = useContext(HeroesContext)
  const search = useQueryParams().get('search')
  const {results,loading,error} = useSearchHero(search)
  console.log(state);
  return(
    <>
      <Navbar/>
      <div style={{margin:"1em 1em 0 1em"}}>
        <Row>
          <Col>
            <h4>Results for: {search}</h4>
          </Col>
          <Col style={{textAlign:"right"}}>
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
              <h5>← Back to Home </h5>
            </Link>
          </Col>
        </Row>
      </div>
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
          <Alert variant="info">
            There are no results for your search
          </Alert>  
        : results.map((hero) =>{
          return(
            <HeroCardSearch key={hero.id} hero={hero}/>
          )
        })}
      </div>
    </>
  )
}