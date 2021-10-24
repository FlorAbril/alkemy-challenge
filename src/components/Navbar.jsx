import { useFormik } from "formik";
import { Container, FormControl, InputGroup,Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function HeroNavbar() {
  const history = useHistory();

  const {handleSubmit, handleChange, values} = useFormik({
   initialValues:{
     search:''
   },
   onSubmit: ({search}) => {
      history.push(`/search?search=${search}`)
    }
  })

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ marginLeft: "1em" }}>
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
              Home
            </Link>
            </Navbar.Brand>
          <InputGroup size="sm" style={{ flexBasis: "15rem" }}>
            <FormControl placeholder="Buscar por nombre" aria-label="Buscar" 
              id="search"
              name="search"
              type="text"
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={values.search}
            />
            <Button variant="outline-light" id="search-btn" onClick={handleSubmit}>
              Buscar
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
  )
}

