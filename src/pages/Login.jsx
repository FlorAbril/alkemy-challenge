import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";


export default function Login() {
  const [, setToken] = useLocalStorage('token')
  const [error,setError] = useState('')

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
  });

  return (
    <div className="login-form">
    <div style = {{ width:" 100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center" }}
    >
      <Formik
        initialValues={{ email: "challenge@alkemy.org", password: "react" }}
        validationSchema={schema}
        onSubmit={async (values) => {
          axios({
            method: "post",
            url: "/api/login",
            data: {
              email: values.email,
              password: values.password,
            },
          })
            .then(({data}) => {
              setToken(data.token);
            })
            .catch(({ response }) => {
              const message = response.data.error;
              setError(JSON.stringify(message));
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
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}
