import React from "react";
import webpagetwo from "./webpagetwo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import QuotesIcon from "../../assets/images/QuotesIcon.png";
const WebPageTwo = () => {
  return (
    <Container className="pageT_container">
      <Row className="pagetwo_wrapper">
        <Col lg={4} className="pagetwo_nav_col">
          <span className="pagetwo_nav_txt">Hoe het werkt</span>
        </Col>
        <Col lg={4} className="pagetwo_nav_col">
          <span className="pagetwo_nav_txt">Krijg direct een bod</span>
        </Col>
        <Col lg={4} className="pagetwo_nav_col">
          <span className="pagetwo_nav_txt">Realistisch</span>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="hr_line_pageT" />
        </Col>
      </Row>

      <Row>
        <Col className="pageT_title">
          <h3 className="pageT_title_txt">
            Verkoop jouw huis in Vlaanderen SNEL
          </h3>
        </Col>
      </Row>

      <Row>
        <Col className="pageT_heading">
          <p className="pageT_heading_txt">Ben jij van volgende gedachte..</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="pageT_paragraph_icon">
            <Image
              className="pageT_icon"
              width="56px"
              height="49px"
              src={QuotesIcon}
              rounded
            />
            <p className="pageT_paragraph_txt">
              Ik wil mijn huis verkopen in Vlaanderen zonder te investeren in
              renovaties of het betalen van een hoge commissie bij een
              vastgoedmakelaar? Ik wens mijn woning direct en discreet te
              verkopen.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="pageT_paragraph_txt_2">
            Wij kopen huizen, appartementen in de staat waarin ze zich bevinden.
            Geen herstellingen, Geen opruiming, geen vastgoedmakelaar, geen
            opendeurdagen. Bespaar duizenden euro’s aan renovatie, Betaal geen
            makelaarscommissie en bespaar tijd. Wij betalen alle kosten zoals
            attesten. <br /> <br /> Snelle verkoop biedt binnen de 24h, met een direct
            voorschot indien gewenst. Vul onze <span className="pageT_paragraph_txt_2_imp">ontvang een bod formulier</span>  in of
            bel ons op <span className="pageT_paragraph_txt_2_imp">0472 00 00 00</span>!
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="hr_line_pageT hrlin-mb" />
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageTwo;
