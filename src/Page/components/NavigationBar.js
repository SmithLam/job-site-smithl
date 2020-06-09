import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import JobLogo from './job-logo2.png'


export default function NavigationBar(props) {
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
      Smith's Find IT Jobs
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto"/>
  
  <Form inline onSubmit={(event) => {event.preventDefault(); props.handleSearch(event, props.keyword); props.setKeyword("")}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)}/>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
