import { Container, Navbar } from "react-bootstrap";
import Heroes from "./components/Heroes";
import Statistics from "./components/Statistics";

export default function Home(){
  return(
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand style={{marginLeft:"1em"}}>Home</Navbar.Brand>
      </Navbar>
      <div style={{
          margin:"1em"
        }}
      >
        <h1>Tu equipo</h1>
        <Heroes/> 
        <h1>Estadísticas</h1>
        <Statistics/>
      </div>
    </>
  )
}