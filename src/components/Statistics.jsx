import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function Statistics() {
  return(
    <div style={{maxWidth:"30rem"}}>
      <Card style={{marginTop:"1em",marginBottom:"1em"}}>
        <Card.Header>Powerstars acumulados</Card.Header>
        <ListGroup variant="flush" > 
          <ListGroupItem>
            <Row>
              <Col>
                Intelligence
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                Strength 
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                Speed
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                Durability
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                Power
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                Combat
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <ListGroup variant="flush" >
          <ListGroupItem>
            <Row>
              <Col>
                Peso promedio
              </Col>
              <Col style={{textAlign: "right"}}>
                200
              </Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Altura Promedio 
                </Col>
                <Col style={{textAlign: "right"}}>
                  200
                </Col>
              </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  )
}