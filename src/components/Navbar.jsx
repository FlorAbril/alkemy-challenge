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

  return (
    <Navbar bg="dark" variant="dark">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingRight: "1em",
        }}
      >
        <Navbar.Brand style={{ marginLeft: "1em" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Heroes Team
          </Link>
        </Navbar.Brand>

        <InputGroup as="form" onSubmit={handleSubmit} size="sm" style={{ flexBasis: "15rem" }}>
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
