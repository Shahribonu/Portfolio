import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import banner from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Frontend Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {/* <div className={isVisible ? "animate__animated fadeIn" : ""}> */}
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi I'm Shahribonu "} <span className="wrap">{text}</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and
              </p>
              <button onClick={() => console.log("clicked")}>
                Let's Connect{" "}
                <span>
                  <AiOutlineArrowRight size={24} />
                </span>
              </button>
              {/* </div> */}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={4} xl={5}>
            <img src={banner} alt="banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
