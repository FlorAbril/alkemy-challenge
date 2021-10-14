import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  let history = useHistory();
  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
  });

  return (
    <div style = {{ width:" 100%",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      alignItems: "center" }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values) => {
          axios({
            method: "post",
            url: "http://challenge-react.alkemy.org/",
            data: {
              email: values.email,
              password: values.password,
            },
          })
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              history.push("/");
            })
            .catch(({ response }) => {
              const message = response.data.error;
              const status = `Error ${response.status}: ${response.statusText}`;
              alert(JSON.stringify(`${message}. ${status}`));
            });
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Card body border="primary" 
            style = {{ flexBasis: "20rem",
              height: "min-content",
              margin: "0 1em" 
            }}
          >
            <Card.Title>Log In</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
}
