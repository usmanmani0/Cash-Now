import React from 'react'
import "./webpagenine.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import pg9img1 from '../../assets/images/PagesixImg1.png'
import pg9img2 from '../../assets/images/PagesixImg2.png'
import pg9img3 from '../../assets/images/PageSixImg3.png'
import pg9img4 from '../../assets/images/PagesixImg4.png'
import pg9LocationIcon from "../../assets/images/LocationIcon.png";

const WebPageNine = () => {
    return (
        <div>
            <Container>
            <div className="nine-section">


            <Row>
            <Col lg={10} xs={12}>
            <div>
            <img className="PagenineImg1" src={pg9img1} alt="PagenineImg1"></img>
            <img className="PagenineImg2" src={pg9img2} alt="PagenineImg2"></img>
            <img className="PagenineImg3" src={pg9img3} alt="PagesixImg3"></img>
            <img className="PagenineImg4" src={pg9img4} alt="PagenineImg4"></img>
            </div>
            </Col>
            <Col lg={2} xs={12}>
            <div className="pg9location_div">
            <div>
            <img className="Pagenineloc" src={pg9LocationIcon} alt="Pagenineloc"></img>
            </div>
            <div className="pg9loc_desc">
            <h4 className="pg9loc_heading">Oostende</h4>
            <h4 className="pg9loc_detail">Renovatieproject (realisatie, Reeds in verhuur</h4>
            </div>
            </div>
            </Col>
            </Row>
            </div>
            </Container>
        </div>
    )
}

export default WebPageNine
