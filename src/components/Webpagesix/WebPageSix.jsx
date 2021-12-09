import React from 'react'
import "./webpagesix.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import pg6img1 from '../../assets/images/PagesixImg1.png'
import pg6img2 from '../../assets/images/PagesixImg2.png'
import pg6img3 from '../../assets/images/PageSixImg3.png'
import pg6img4 from '../../assets/images/PagesixImg4.png'
import pg6img5 from '../../assets/images/PageSixImg5.png'
import pg6LocationIcon from "../../assets/images/LocationIcon.png";
const WebPageSix = () => {
    return (
        <div>
            <Container>
            <div className="six-section">
            <hr className="top_line"></hr>
            <div>
            <h4 className="heading_six">Snelle verkoop voor jou</h4>
            </div>
            <div className="para_six">
            <p className="pagesix_detail">We kopen huizen in Vlaanderen in elke conditie, situatie en prijsklasse. Ons bedrif koopt de eigendom in de staat waarin het zich bevindt. Zoats bouwvallig, verwoond, te renoveren, Een huis in slechte staat waarin het zich bevindt. Zoals bouwvallig, verwoond, te renoveren, Een huis in slechte staat? wij kunnen helpen!</p>
            </div>

            <Row>
            <Col  Col={4}>
            <img className="PagesixImg1" src={pg6img1} alt="PagesixImg1"></img>
            </Col>
            <Col Col={3}>
            <div>
            <img className="PagesixImg2" src={pg6img2} alt="PagesixImg2"></img>
            <img className="PagesixImg3" src={pg6img3} alt="PagesixImg3"></img>
            </div>
            </Col>
            <Col Col={3}>
            <div>
            <img className="PagesixImg4" src={pg6img4} alt="PagesixImg4"></img>
            <img className="PagesixImg5" src={pg6img5} alt="PagesixImg5"></img>
            </div>
            </Col>
            <Col Col={2}>
            <div className="location_div">
            <div>
            <img className="Pagesixloc" src={pg6LocationIcon} alt="Pagesixloc"></img>
            </div>
            <div className="loc_desc">
            <h4 className="loc_heading">Roeselare</h4>
            <h4 className="loc_detail">Groot renovatieproject</h4>
            </div>
            </div>
            </Col>
            </Row>
            </div>
            </Container>
        </div>
    )
}

export default WebPageSix
