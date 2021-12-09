import React from "react";
import "./webpageseven.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import pg7img1 from "../../assets/images/PagesixImg1.png";
import pg7img2 from "../../assets/images/PageSixImg2.png";
import pg7img3 from "../../assets/images/PageSixImg3.png";
import pg7img4 from "../../assets/images/PageSIxImg4.png";
import pg7img5 from "../../assets/images/PageSixImg5.png";
import pg7LocationIcon from "../../assets/images/LocationIcon.png";

const WebPageSeven = () => {
  return (
    <div>
      <Container>
        <div className="seven-section">
          <Row>
            <Col lg={3}>
              <img
                className="PagesevenImg1"
                src={pg7img1}
                alt="PagesevenImg1"
              ></img>
            </Col>
            <Col lg={3}>
              <div>
                <img
                  className="PagesevenImg2"
                  src={pg7img2}
                  alt="PagesevenImg2"
                ></img>
                <img
                  className="PagesevenImg3"
                  src={pg7img3}
                  alt="PagesevenImg3"
                ></img>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <img
                  className="PagesevenImg4"
                  src={pg7img4}
                  alt="PagesevenImg4"
                ></img>
                <img
                  className="PagesevenImg5"
                  src={pg7img5}
                  alt="PagesevenImg5"
                ></img>
              </div>
            </Col>
            <Col lg={3} className="pg7location_div">
              <div className="pg7location_div">
                <div>
                  <img
                    className="Pagesevenloc"
                    src={pg7LocationIcon}
                    alt="Pagesevenloc"
                  ></img>
                </div>
                <div className="pg7loc_desc">
                  <h4 className="pg7loc_heading">Deerlijk</h4>
                  <h4 className="pg7loc_detail">Groot renovatieproject</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WebPageSeven;
