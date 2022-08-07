import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import icons1 from "../assets/img/nav-icon1.svg";
import icons2 from "../assets/img/nav-icon2.svg";
import icons3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <Container>
        <Row>
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={icons1} alt="icon" />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <img src={icons2} alt="icon" />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <img src={icons3} alt="icon" />
              </a>
            </div>
            <p>CopyRight 2022. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
