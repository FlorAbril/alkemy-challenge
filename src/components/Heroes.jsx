import { Card, Col, Container, ListGroup, ListGroupItem, Row,Button, CardImg } from "react-bootstrap";

export default function Heroes() {
  const heroes = [
    { name: "Batman",
      powerstars:{
        intelligence:"100",
        strength:"26",
        speed: "27",
        durability:"50",
        power:"47",
        combat:"100"
      },
      img:""
    },
    { name: "Superman",
      powerstars:{
        intelligence:"100",
        strength:"100",
        speed: "100",
        durability:"100",
        power:"100",
        combat:"84"
      },
      img:""
    },
    { name: "Beyonder",
      powerstars:{
        intelligence:"105",
        strength:"24",
        speed: "35",
        durability:"48",
        power:"53",
        combat:"110"
      },
      img:""
    },
    { name: "Beyonder",
      powerstars:{
        intelligence:"105",
        strength:"24",
        speed: "35",
        durability:"48",
        power:"53",
        combat:"110"
      },
      img:""
    },
    { name: "Beyonder",
      powerstars:{
        intelligence:"105",
        strength:"24",
        speed: "35",
        durability:"48",
        power:"53",
        combat:"110"
      },
      img:""
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
      {heroes.map(hero =>{
        return(
          <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexBasis: "24rem",
              flexGrow: "1",
              maxWidth: "30rem"
            }}
            key={hero.name}
          >
            <Card style={{flexBasis: "12rem", flexGrow: "1"}}>
              <Card.Img variant="top" src="logo512.png"/>
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{hero.name}</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{flexBasis: "12rem", flexGrow: "1"}}>
              <ListGroup variant="flush" > 
                    <ListGroupItem>
                      <Row>
                        Powerstars
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Intelligence
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.intelligence}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Strength 
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.strength}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Speed
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.speed}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Durability
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.durability}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Power
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.power}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>
                          Combat
                        </Col>
                        <Col style={{textAlign: "right"}}>
                          {hero.powerstars.combat}
                        </Col>
                      </Row>
                    </ListGroupItem>
              </ListGroup>
              <Card.Body style={{display: "flex",
                justifyContent: "space-between"}}
              >
                <Button variant="outline-info">Detalle</Button>
                <Button variant="outline-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
     
    </div>
  )
}