import React from "react";
import footer from "./footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import CashNowLogo from "../../assets/images/CashNowLogo.png";

const Footer = () => {
  return (
    <Container className="footer_container" fluid>
      <Container >
        <Row>
          <Col lg={12} className="mv_footer_r1" >
            <span className="privacy_footer_txt">Privacy</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="footer_img_para">
              <Image
                className="img_footer"
                src={CashNowLogo}
                rounded
              />
              <p className="footer_para_txt">
                Snelle verkoop is een proffesionele opkoper in Vlaanderen. We
                helpen jou met een snelle verkoop van uw vastgoed (huis,
                appartement, grond) Koopvoorstel nodig? Neem contact op. <br /> Ons
                bedrijf is gelegen te ….. Tel: 0470 00 00 00, email:
                info@snelleverkoop.be
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
