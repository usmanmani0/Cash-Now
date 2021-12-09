import React from "react";
import navbar from "./navbar.css";

import { Container, Row, Col } from "react-bootstrap";
const Navbar = () => {
  return (
    <Container className="navbar_container" fluid>
      <Container>
        <Row>
          <Col lg={5} className="navbar_items">
            <span className="navbar_txt">Huizen</span>
            <span className="navbar_txt">Appartementen</span>
            <span className="navbar_txt">Gronden</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Navbar;
