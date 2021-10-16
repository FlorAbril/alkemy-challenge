import { Card, Button } from "react-bootstrap"

export default function SearchResults({results}) {
 
  return(
    <Card style={{width: "12rem"}}>
      <Card.Img variant="top" src="logo512.png"/>
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>Nombre</Card.Title>
        <Button variant="outline-info">Añadir</Button>
      </Card.Body>
    </Card>
  )
}