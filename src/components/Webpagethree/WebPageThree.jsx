import React from "react";
import webpagethree from "./webpagethree.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import InboxIcon from "../../assets/images/InboxIcon.png";
import handIcon from "../../assets/images/HandIcon.png";
import SoldIcon from "../../assets/images/SoldIcon.png";

const WebPageThree = () => {
  return (
    <Container className="pageThree_container">
      <Row>
        <Col className="pageT_title">
          <h3 className="pageT_title_txt">
            Verkoop jouw huis in Vlaanderen SNEL
          </h3>
        </Col>
      </Row>

      <Row className="pageThree_paragraph_wrapper">
        <Col>
          <p className="pageT_paragraph_txt">
            Snell verkoop heeft jaren ervaring in het opkopen van huizen,
            appartementen en gronden. Onze 3 stappen koop proces maakt het kou
            gemakkelijk. Verkoop jouw huis in Vlaanderen op de gemakkelijkste
            manier. <br />
            <br /> Ontdek hoe het werkt…
          </p>
        </Col>
      </Row>

      <Row className="pageThree_cards_wrapper">
        <Col>
          <div className="pageThree_card_1">
            <Image  src={InboxIcon} rounded />
            <h3 className="pageThree_card_1_heading">
              Stap 1 - contacteer ons!
            </h3>
            <p className="pageThree_card_1_para_txt">
              Bel snel verkoop op
              <br /> <span className="pageT_paragraph_txt_2_imp">0470 00 00 00</span> of vul het{" "}
              <span className="pageT_paragraph_txt_2_imp">
                Ontvang een bod formulier
              </span>
              <br /> in. Na ons bezoek zal ons team informatie verzamelen om ons
              hoogst mogelijk bod op te maken.
            </p>
          </div>
        </Col>
        <Col>
          <div className="pageThree_card_1">
            <Image  src={handIcon} rounded />
            <h3 className="pageThree_card_2_heading">
              Stap 2 - ontvang een Correct bod met voorschot.
            </h3>
            <p className="pageThree_card_1_para_txt">
              Wij maken een correct bod op Rekening houdend met de Kosten voor
              verkoop; zoals Certificaten, keuringen,…
            </p>
          </div>
        </Col>
        <Col>
          <div className="pageThree_card_1">
            <Image  src={SoldIcon} rounded />
            <h3 className="pageThree_card_3_heading">Stap 3 - verkocht.</h3>
            <p className="pageThree_card_1_para_txt">
              U bepaald zelf de datum <br /> Van effectieve verkoop. <br /> Geen kosten, geen
              Makelaarscommissie, <br /> Geen opendeurdag, … <br /> Alles is geregeld.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageThree;
