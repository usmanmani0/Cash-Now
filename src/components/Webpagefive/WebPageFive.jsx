import React from "react";
import webpagefive from "./webpagefive.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import DollorIcon from "../../assets/images/DollorIcon.png";
import LoopIcon from "../../assets/images/LoopIcon.png";

const WebPageFive = () => {
  return (
    <Container className="pg_five_container">
      <Row>
        <Col>
          <div className="pg_five_img_para_wrapper">
            <div>
              <h3 className="pg_five_heading_txt">Gen makelaarscommissie</h3>{" "}
              <br />
              <p className="pageFour_para_txt_1">
                Wij zijn GEEN vastgoedkantoor. Er zijn geen commissies
                verschuldigd. GEEN openhuizendag, online publicatie of te koop
                borden en stickers.
              </p>
            </div>
            <Image
              className="pageT_icon img_cards pfi_img_dlr"
              src={DollorIcon}
              rounded
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="pageFour_img_para_wrapper">
            <Image
              className="pageT_icon img_cards pfi_img_dlr"
              src={DollorIcon}
              rounded
            />

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
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="hs_search_form_wrapper_pg_five">
            <p>Ontvang een koopvoorstel</p>

            <form className="inpt_form_hs">
              <div className="input_group_pg_five">
                <input
                  type="text"
                  className="input1"
                  placeholder="Straat"
                ></input>
                <input
                  type="text"
                  className="input2 input2_pg_five"
                  placeholder="Postcode, Stad"
                ></input>
              </div>

              <input
             
                value="Ontvang een bod >>"
                className="sb_btn_hs"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageFive;
