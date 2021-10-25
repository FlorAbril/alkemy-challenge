import { useContext } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row,Button } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";
import { ACTIONS } from "../store/HeroesReducer";


export default function HeroCard({hero}) {
 const {id,name,powerstats,image} = hero
 const [,dispatch] = useContext(HeroesContext)
 const powerstatsList = Object.entries(powerstats)

 const handleRemoveHero = (id) => {
  dispatch({type:ACTIONS.deleteHero,
    payload: id})
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  return(
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      flexBasis: "24rem",
      flexGrow: "1",
      maxWidth: "30rem"
    }}
    key={id}
  >
    <Card style={{flexBasis: "12rem", flexGrow: "1"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{flexBasis: "12rem", flexGrow: "1"}}>
      <ListGroup variant="flush" > 
            <ListGroupItem>
              <Row>
                Powerstats
              </Row>
            </ListGroupItem>
            {powerstatsList.map(([key,value]) => {
              const label = capitalizeFirstLetter(key)
              return(
              <ListGroupItem key={key}>
                <Row>
                  <Col>
                    {label}
                  </Col>
                  <Col style={{textAlign: "right"}}>
                    {value === 'null' ? '-' : value}
                  </Col>
                </Row>
              </ListGroupItem>
              )
            })}
      </ListGroup>
      <Card.Body style={{display: "flex",
        justifyContent: "space-between",
        alignItems: "center"}}>
      
        <Button variant="outline-info">Detalle</Button>
        <Button variant="outline-danger" onClick={()=>handleRemoveHero(id)}>Eliminar</Button>
      </Card.Body>
    </Card>
  </div>
  )
}