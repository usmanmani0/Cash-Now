import React from "react";
import webpageten from "./webpageten.css";
import { Container, Row, Col } from "react-bootstrap";
const WebPageTen = () => {
  return (
    <Container className="pg_ten_container">
      <Row>
        <Col className="pageT_title">
          <h3 className="pageT_title_txt">Onze service</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="pg_ten_para_txt">
            Snelle verkoop is en vastqoed investeerder. We zin actief in onder
            andere regio Kortrijk, Roeselare, Gent, Brugge, Antwerpen,
            Willeboek, Genk, Hasselt. <br /><br /> Snelle verkoop koopt vastaoed in de staat
            waarin het zich bevindt. <br /> Zoals bouwvallig, verwoond, te renoveren,<br />
            Geraakt jouw woning niet verkocht? wij kunnen helpen! <br /><br /> Snelle verkoop
            biedt op woningen in volledig Vlaanderen. <br /> Elke staat, situatie of
            prijsklasse - we maken het jou gemakkelijk. <br /><br /> Klaar voor een
            prijzenvoorstel? <br /><br /> Vul het formulier in door <span className="pageT_paragraph_txt_2_imp">hier</span> te klikken of bel
            ons <span className="pageT_paragraph_txt_2_imp">0470 00 00 00.</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageTen;
