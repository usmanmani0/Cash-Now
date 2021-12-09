import React from "react";
import "../Step3/step3.css";
import Header from "../../Header/Header";
import NavBar from "../../Navbar/NavBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const Step3 = () => {
  return (
    <>

      <div className="stap_3_wrapper">
        <div className="d-flex justify-content-center mt-5">
          <div className="step3_heading">
            <span className="step3_tag">Stap 3:</span> Contactpersoon
          </div>
        </div>
        <div className="Step3_form_section_wrapper mt-5">
          <div className="Step3_feilds_wrapper">
            <div className="d-flex justify-content-between mobile_view">
              <div>
                <div className="Step3_input_label">Voornaam</div>
                <div className="Step3_input_field">
                  <input type="tex" />
                </div>
              </div>
              <div>
                <div className="Step3_input_label">Naam</div>
                <div className="Step3_input_field">
                  <input type="tex" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mobile_view mt-2">
              <div>
                <div className="Step3_input_label">Email</div>
                <div className="Step3_input_field">
                  <input type="tex" />
                </div>
              </div>
              <div>
                <div className="Step3_input_label">Telefoonnummer</div>
                <div className="Step3_input_field">
                  <input type="tex" />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <Link to="/step4">   <button className="step3_btn">
                Volgende <i class="fas fa-chevron-right Step3_btn_arrow"></i>{" "}
                <i class="fas fa-chevron-right btn_arrow"></i>
              </button></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Step3;
