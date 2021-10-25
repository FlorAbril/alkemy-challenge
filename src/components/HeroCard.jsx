import { useContext } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row,Button } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";
import { ACTIONS } from "../store/HeroesReducer";


export default function HeroCard({hero}) {
 const {id,name,powerstats,image} = hero
 const [,dispatch] = useContext(HeroesContext)

 const handleRemoveHero = (id) => {
  dispatch({type:ACTIONS.deleteHero,
    payload: id})
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
            <ListGroupItem>
              <Row>
                <Col>
                  Intelligence
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.intelligence}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Strength 
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.strength}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Speed
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.speed}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Durability
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.durability}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Power
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.power}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Combat
                </Col>
                <Col style={{textAlign: "right"}}>
                  {powerstats.combat}
                </Col>
              </Row>
            </ListGroupItem>
      </ListGroup>
      <Card.Body style={{display: "flex",
        justifyContent: "space-between"}}
      >
        <Button variant="outline-info">Detalle</Button>
        <Button variant="outline-danger" onClick={()=>handleRemoveHero(id)}>Eliminar</Button>
      </Card.Body>
    </Card>
  </div>
  )
}