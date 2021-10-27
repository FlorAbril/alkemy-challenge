import { Button, Col, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap"


const HeroDetail = ({ hero, show, handleClose}) => {
  const { name,biography,appearance,workplace} = hero
  const appearanceList = Object.entries(appearance)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
return (
  <Modal centered fullscreen="md-down" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col>
                  Full Name
                </Col>
                <Col style={{textAlign: "right"}}>
                  {biography.fullName.length === 0 ? '-' : biography.fullName}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Aliases
                </Col>
                <Col style={{textAlign: "right"}}>
                  {biography.aliases.length === 0 ? '-' : biography.aliases.join(', ')}
                </Col>
              </Row>
            </ListGroupItem>
            {appearanceList.map(([key,value]) => {
              const label = capitalizeFirstLetter(key)
              return(
              <ListGroupItem key={key}>
                <Row>
                  <Col>
                    {label}
                  </Col>
                  <Col style={{textAlign: "right"}}>
                    {(value === 'null' || value === '0 kg'  || value === '0 cm') ? '-' : value}
                  </Col>
                </Row>
              </ListGroupItem>
              )
            })}
            <ListGroupItem>
              <Row>
                <Col>
                  Work Place
                </Col>
                <Col style={{textAlign: "right"}}>
                  {workplace.length === 0 ? '-' : workplace}
                </Col>
              </Row>
            </ListGroupItem>
           </ListGroup> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default HeroDetail