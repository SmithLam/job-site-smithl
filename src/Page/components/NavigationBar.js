import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import JobLogo from "./job-logo2.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function NavigationBar(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let history = useHistory();

  const logout = (event) => {
    event.preventDefault();
    dispatch({ type: "LOGOUT" });
    history.push(`/jobs`);
  };

  const logInPage = (event) => {
    event.preventDefault();
    history.push(`/login`);
  };

  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/jobs">
        <img
          src={JobLogo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Job Logo"
        />
        Smith's Find IT Jobs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />

        <Form
          inline
          onSubmit={(event) => {
            event.preventDefault();
            props.handleSearch(event, props.keyword);
            props.setKeyword("");
          }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={props.keyword}
            onChange={(event) => props.setKeyword(event.target.value)}
          />
          {state.user.isAuthenticated === true ? (
            <Button onClick={(event) => logout(event)} variant="outline-danger">
              Logout
            </Button>
          ) : (
            <Button
              onClick={(event) => logInPage(event)}
              variant="outline-danger"
            >
              Login
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
