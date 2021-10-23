import { useFormik } from "formik";
import { useContext } from "react";
import { Container, FormControl, InputGroup,Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import { useHistory } from "react-router";
import { getHeroesByName } from "../hooks/useHero";
import { HeroesContext } from "../store/HeroesProvider";
import { ACTIONS } from "../store/HeroesReducer";

export default function HeroNavbar() {
  const [state,dispatch] = useContext(HeroesContext)
  let history = useHistory();

  const {handleSubmit, handleChange, values} = useFormik({
   initialValues:{
     search:''
   },
   onSubmit: ({search}) => {
      getHeroesByName(search)
      .then((res)=>{
        dispatch({
          type:ACTIONS.saveSearch,
          payload: res
        })
      })
      console.log(state.searchResults);
      history.push('/search')
    }
  })

  return (
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
  )
}

