import React from "react";
import "./webpagenine.css";
import { Container } from "react-bootstrap";
import pg9img1 from "../../assets/images/PageNineImg1.png";
import pg9img2 from "../../assets/images/PageNIneImg3.png";
import pg9img3 from "../../assets/images/PageNineImg2.png";
import pg9img4 from "../../assets/images/PageNIneImg4.png";
import pg9LocationIcon from "../../assets/images/LocationIcon.png";

const WebPageNine = () => {
  return (
    <Container className="pg_nine_container">
      <div className="nine-section">
        <div className="img_box">
          <div className="imgoverlay">
            <img
              className="PagenineImg1"
              src={pg9img1}
              alt="PagenineImg1"
            ></img>
            <img
              className="PagenineImg2"
              src={pg9img2}
              alt="PagenineImg2"
            ></img>
          </div>
          <div className="imgoverlay2">
            <img className="PagenineImg3" src={pg9img3} alt="PagesixImg3"></img>
            <img
              className="PagenineImg4"
              src={pg9img4}
              alt="PagenineImg4"
            ></img>
          </div>
        </div>
        <div className="pg9location_div">
          <div>
            <img
              className="Pagenineloc"
              src={pg9LocationIcon}
              alt="Pagenineloc"
            ></img>
          </div>
          <div className="pg9loc_desc">
            <h4 className="pg9loc_heading">Oostende</h4>
            <h4 className="pg9loc_detail">
              Renovatieproject <br /> (realisatie, Reeds in verhuur)
            </h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WebPageNine;
