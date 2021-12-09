import React from "react";
import headersection from "./headersection.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Coins from "../../assets/images/Coins.png";
import HomeLoop from "../../assets/images/HomeLoop.png";
import YesTick from "../../assets/images/YesTick.png";

const HeaderSection = () => {
  return (
    <>
      <Container className="headersection_container" fluid>
        <Row className="headersection_wrapper">
          <Col lg={6} xs={12} xl={6} md={6} sm={6}>
            <div className="headersection_col_1">
              <p className="headersection_txt">
                <span className="uline">Direct</span> verkocht,
                <br />
                <span className="uline">zonder</span> kosten,
                <br /> dat is wat we doen.
              </p>
            </div>
          </Col>
          <Col lg={3} xs={12} xl={3} md={3} sm={3}>
            <div className="headersection_col_2">
              <Image className="coins_img" src={Coins} rounded />
            </div>
          </Col>
          <Col lg={3} xs={12} xl={3} md={3} sm={3}>
            <div className="headersection_col_3">
              <Image className="home_loop_img" src={HomeLoop} rounded />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="headersection_form_container" fluid>
        <Row>
          <Col lg={6} xs={12}>
            <div className="hs_search_form_wrapper1">
              <p>Ontvang een koopvoorstel</p>

              <form  className="inpt_form_hs">
                <div className="input_group">
                  <input
                    type="text"
                  
                    className="input1"
                    placeholder="Straat"
                  ></input>
                  <input
                    type="text"
                 
                    className="input2"
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
          <Col lg={6} xs={12}>
            <div className="hs_search_form_wrapper2">
              <h3 className="title_txt_hs">Wij kopen zelf:</h3>
              <div className="tick">
                <Image className="tick_img"  src={YesTick} rounded />
                <h3 className="items_txt_hs">Bod binnen 24 uur</h3>
              </div>
              <div className="tick">
                <Image className="tick_img" src={YesTick} rounded />
                <h3 className="items_txt_hs">Bod binnen 24 uur</h3>
              </div>
              <div className="tick">
                <Image className="tick_img" src={YesTick} rounded />
                <h3 className="items_txt_hs">Bod binnen 24 uur</h3>
              </div>
              <div className="tick">
                <Image className="tick_img" src={YesTick} rounded />
                <h3 className="items_txt_hs">Bod binnen 24 uur</h3>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderSection;
