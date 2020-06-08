import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import JobLogo from './job-logo2.png'


export default function NavigationBar() {
    return (
        <Navbar className="sticky-top"collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/jobs">
      <img
        src={JobLogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Job Logo"
      />
      IT Jobs
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto"/>
  
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-secondary">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
