import { useFormik } from "formik";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function HeroNavbar() {
  const history = useHistory();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: ({ search }) => {
      history.push(`/search?search=${search}`);
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 1em",
          flexWrap: "wrap", 
          columnGap: "1em"
        }}
      >
        <div style={{
          flexGrow: "4",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Navbar.Brand >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Heroes Team
            </Link>
          </Navbar.Brand>
          <label onClick={handleLogout}
            style={{color:"white", cursor:'pointer'}}
          >
            Logout
          </label>
        </div>
        
          <InputGroup as="form" onSubmit={handleSubmit} size="sm" 
            style={{ 
              flexBasis: "15rem",
              flexGrow: "1"
            }}>
            <FormControl
              placeholder="Find by name"
              aria-label="Buscar"
              id="search"
              name="search"
              type="text"
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={values.search}
            />
            <Button type="submit"
              variant="outline-light"
              id="search-btn"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </InputGroup>
          
        
      </div>
    </Navbar>
  );
}
