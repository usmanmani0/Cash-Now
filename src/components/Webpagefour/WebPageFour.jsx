import React from "react";
import webpagefour from "./webpagefour.css";
import { Container, Row, Col, Image, Tooltip } from "react-bootstrap";
import certifiedIcon from "../../assets/images/CertifiedIcon.png";
import ToopIcon from "../../assets/images/ToopIcon.png";

const WebPageFour = () => {
  return (
    <Container>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col className="pageT_title">
          <h3 className="pageT_title_txt pf_tt">TOP opkoper Vlaanderenv</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="pageFour_para_txt pf_ptxt">
            Wens je graag samen te werken met en betrouwbaar, transparante en
            ervaren opkoper? Dan kunt u bij ons, snelle verkoop terecht!
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="pageFour_img_para_wrapper">
            <Image
              className="pageT_icon img_cards pf_img_certi"
              src={certifiedIcon}
              rounded
            />
            <p className="pageFour_para_txt_1">
              Wens je graag samen te werken met en betrouwbaar, transparante en
              ervaren opkoper? We zijn en gekende opkoper in Vlaanderen. We
              helpen in alle verschillende situaties. We zorgen ervoor dat de
              verkoop vlekkeloos verloopt. U hoeft geen tijd en energie te
              stoppen in administratie, wij regelen alles van A tot Z. <br />
              <br /> We garanderen en eerijk bod, snelle verkoop, geen
              makelaarscommissie, geen extra kosten. UW tevredenheid staat bi
              ons centraal.Dan kunt u bij ons, snelle verkoop terecht!
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="pageFour_img_para_wrapper">
            <Image className="pageT_icon img_cards pf_img_certi" src={ToopIcon} rounded />

            <div>
              <h3 className="pageFour_heading_txt">Snelle verkoop</h3> <br />
              <p className="pageFour_para_txt_1">
                De snelste weg om uw huis te verkopen in Vlaanderen! Gen
                tijdsinvestering voor openhuizendag ect., directe verkoop!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageFour;
