import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="footer-main align-items-start">
          <Col xs={12} md={5} className="footer-brand">
            <a href="#home" aria-label="Back to Home">
              {/* <img src={logo} alt="Portfolio Logo" className="footer-logo" /> */}
            </a>
            <p className="footer-description">
              Building reliable software solutions and responsive web applications through modern technologies, clean code, and problem-solving.
            </p>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer-links">
            <h5>Explore</h5>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#connect">Contact</a>
          </Col>

          <Col xs={12} sm={6} md={4} className="footer-connect">
            <h5>Let's Connect</h5>
            <p>Have an idea or opportunity? Let's connect.</p>

            <div className="social-icon">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom align-items-center">
          <Col xs={12} sm={8}>
            <p>
              © {new Date().getFullYear()} All Rights Reserved.
              Designed & Developed with care.
            </p>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};