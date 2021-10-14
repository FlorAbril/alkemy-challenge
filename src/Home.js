import Heroes from "./components/Heroes";
import Statistics from "./components/Statistics";
import { Container, FormControl, InputGroup, Navbar,Button } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ marginLeft: "1em" }}>Home</Navbar.Brand>
          <InputGroup size="sm" style={{ flexBasis: "15rem" }}>
            <FormControl placeholder="Buscar por nombre" aria-label="Buscar" />
            <Button variant="outline-light" id="search-btn">
              Buscar
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
      <div
        style={{
          margin: "1em",
        }}
      >
        <h1>Tu equipo</h1>
        <Heroes />
        <h1>Estadísticas</h1>
        <Statistics />
      </div>
    </>
  );
}
