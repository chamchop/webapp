import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <Container>
      <Navbar>
        <Nav activeKey="/home" >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Data" eventKey="/Data">Data</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/News" eventKey="/News">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Opinion" eventKey="/Opinion">Opinion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About" eventKey="/About">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Navigation;