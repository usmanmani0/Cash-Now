import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import header from "./header.css";
import CashNowLogo from "../../assets/images/CashNowLogo.png";
import CallIcon from "../../assets/images/CallIcon.png";
const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" className="cashnewlogo">
          <Image className="mv_logo" src={CashNowLogo} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Image src={CallIcon} rounded />
          <span className="header_txt">Bel ons 0470 00 00 00</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
