import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import icons1 from "../assets/img/nav-icon1.svg";
import icons2 from "../assets/img/nav-icon2.svg";
import icons3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";

const NavBar = () => {
  const [activatedLink, setActivatedLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActivatedLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activatedLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activatedLink === "skills"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activatedLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shahribonu-otaqulova/">
                <img src={icons1} alt="icon" />
              </a>
              <a href="https://www.linkedin.com/in/shahribonu-otaqulova/">
                <img src={icons2} alt="icon" />
              </a>
              <a href="https://www.linkedin.com/in/shahribonu-otaqulova/">
                <img src={icons3} alt="icon" />
              </a>
            </div>
            <button
              className="vvd"
              href="#contact"
              onClick={() => console.log("clicked")}
            >
              {" "}
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
