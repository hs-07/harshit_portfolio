import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-img.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="profile_logo">
            <img src={logo} alt="profile" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harshit-shukla-67b28a212/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.github.com/hs-07"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/harshit_1906/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved | Made with ❤️ </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
