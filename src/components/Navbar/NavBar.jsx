import React from "react";
import navbar from "./navbar.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
const Navbar = () => {
  return (
    <Container className="navbar_container" fluid>
      <Container>
        <Row>
          <Col lg={5} className="navbar_items">
            <Link to="/step2" className="navbar_txt">
              {" "}
              <span className="navbar_txt">Huizen</span>
            </Link>
            <span className="navbar_txt">Appartementen</span>
            <span className="navbar_txt">Gronden</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Navbar;
