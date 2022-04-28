import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { token } from "../utils/keys";
const loginButton = {
  color: "#fff",
  textDecoration: "none",
  backgroundColor: "#bb2d3b",
  padding: "5px 16px",
  borderRadius: "5px",
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "#fff", fontSize: "20px" }}
          >
            Home
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            {!token ? (
              <Nav>
                <Link to={"/sign-in"} style={loginButton}>
                  Sign In
                </Link>
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <section className={"mt-5"}>{children}</section>
      </Container>
    </>
  );
};

export default Layout;
