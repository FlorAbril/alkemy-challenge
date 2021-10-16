import Heroes from "./components/Heroes";
import Statistics from "./components/Statistics";
import { Container, FormControl, InputGroup, Navbar,Button } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";


export default function Home() {
  const {handleSubmit,
    handleChange,
    values} = useFormik({
   initialValues:{
     search:''
   },
   onSubmit: (values) => {
    axios({
      method: 'get',
      url: `https://superheroapi.com/api/4356384401116515/search/${values.search}`,
    })
      .then(function (res) {
        console.log(res);
      });
   }
 })
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ marginLeft: "1em" }}>Home</Navbar.Brand>
          <InputGroup size="sm" style={{ flexBasis: "15rem" }}>
            <FormControl placeholder="Buscar por nombre" aria-label="Buscar" 
              id="search"
              name="search"
              type="text"
              onChange={handleChange}
              value={values.search}
            />
            <Button variant="outline-light" id="search-btn" onClick={handleSubmit}>
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
