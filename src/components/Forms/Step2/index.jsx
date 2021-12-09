import React from 'react'
import "../Step2/step2.css"
import Step3 from '../Step3'
import Step4 from '../Step4'
import Step5 from "../Step5"
import FormBottomText from "../Text"
import { Navbar } from "react-bootstrap";
import Header from "../../Header/Header";
import NavBar from "../../Navbar/NavBar";
import Footer from "../../Footer/Footer";
import "../Step2/step2.css";
import { Link } from "react-router-dom"

const Step2 = () => {
    return (
        <>

            <div className="stap_2_wrapper">
                <div className="justify-content-center mt-5">
                    <div className="step2_heading text-center">
                        <span className="step2_tag">Stap 2:</span> Help ons het adres te
                        bevestigen
                    </div>
                </div>
                <div className="Step2_form_section_wrapper mt-5">
                    <div className="d-flex justify-content-center">
                        <p className="Step2_form_text">
                            Stap 2: Help ons het adres te bevestigen
                        </p>
                    </div>
                    <div className="Step2_feilds_wrapper">
                        <div className="d-flex justify-content-between mobile_view">
                            <div>
                                <div className="Step2_input_label">Postcode</div>
                                <div className="Step2_input_field">
                                    <input type="tex" />
                                </div>
                            </div>
                            <div>
                                <div className="Step2_input_label">Stad</div>
                                <div className="Step2_input_field">
                                    <input type="tex" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mobile_view mt-2">
                            <div>
                                <div className="Step2_input_label">Straat</div>
                                <div className="Step2_input_field">
                                    <input type="tex" />
                                </div>
                            </div>
                            <div>
                                <div className="Step2_input_label">Nummer</div>
                                <div className="Step2_input_field">
                                    <input type="tex" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div>
                                <div className="Step2_input_label">Telefoonnummer</div>
                                <div className="Step2_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/step3"> <button className="step2_btn">
                                Volgende <i class="fas fa-chevron-right Step2_btn_arrow"></i>{" "}
                                <i class="fas fa-chevron-right btn_arrow"></i>
                            </button></Link>
                        </div>
                        {/* <div className='mt-5'>
                            <FormBottomText />
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Step2;
