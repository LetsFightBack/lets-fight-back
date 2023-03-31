import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { signOutUser } from "../../firebase";
import { getHRDetail, getLoginDetails } from "../../utils/firebase/firebase.utils";
import { IsLoggedIn } from "../privateRoute/privateRoute.component";

export default function Appbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    IsLoggedIn().then((event) => {
      if (event == false) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <Navbar bg="light" variant="light" className="shadow-sm p-3 mb-5 bg-white rounded">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.svg"
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Lets fight back logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/view">View</Nav.Link>
        </Nav>
        <Nav>{isLoggedIn ? <Dropdown /> : <Nav.Link href="/login">Login</Nav.Link>}</Nav>
      </Container>
    </Navbar>
  );
}

function Dropdown() {
  return (
    <NavDropdown
      id="collasible-nav-dropdown"
      title={
        <span>
          <img
            alt="user icon"
            width="40"
            height="40"
            className="d-inline-block align-center"
            src="user-icon.svg"
          />
        </span>
      }
    >
      <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/" onClick={signOutUser}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
}
