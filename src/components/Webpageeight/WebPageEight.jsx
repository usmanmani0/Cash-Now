import React from "react";
import "./webpageeight.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import pg8img1 from "../../assets/images/pageEightImg1.png";
import pg8img2 from "../../assets/images/pageEightImg2.png";
import pg8img3 from "../../assets/images/PageEightImg4.png";
import pg8img4 from "../../assets/images/PageEIghtImg3.png";
import pg8img5 from "../../assets/images/PageEightImg5.png";
import pg8LocationIcon from "../../assets/images/LocationIcon.png";

const WebPageEight = () => {
  return (
    <div>
      <Container>
        <div className="eight-section">
          <Row>
            <Col lg={3}>
              <img
                className="PageeightImg1"
                src={pg8img1}
                alt="PageeightImg1"
              ></img>
            </Col>
            <Col lg={3}>
              <div>
                <img
                  className="PageeightImg2"
                  src={pg8img2}
                  alt="PageeightImg2"
                ></img>
                <img
                  className="PageeightImg3"
                  src={pg8img3}
                  alt="PageeightImg3"
                ></img>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <img
                  className="PageeightImg4"
                  src={pg8img4}
                  alt="PageeightImg4"
                ></img>
                <img
                  className="PageeightImg5"
                  src={pg8img5}
                  alt="PageeightImg5"
                ></img>
              </div>
            </Col>
            <Col lg={3} className="pg8location_div">
              <div className="pg8location_div">
                <div>
                  <img
                    className="Pageeightloc"
                    src={pg8LocationIcon}
                    alt="Pageeightloc"
                  ></img>
                </div>
                <div className="pg8loc_desc">
                  <h4 className="pg8loc_heading">Izegem</h4>
                  <h4 className="pg8loc_detail">Groot renovatieproject</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WebPageEight;
