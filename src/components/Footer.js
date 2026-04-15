import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-muhammad.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubpng from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <Col size={5} sm={5}>
            <img src={logo} alt="Muhammad Thalha Logo" />
          </Col> */}
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/muhammad-thalha"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="#"><img src={githubpng} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}