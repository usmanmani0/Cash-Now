import React from 'react'
import "../Step4/step4.css"
import Step3 from '../Step3'

const Step4 = () => {
    return (
        <>
            <div className="">
                <div className="d-flex justify-content-center mt-5">
                    <div className="step2_heading"><span className="step2_tag">Stap 4:</span> Informatie eigendom</div>
                </div>
                <div className="Step4_form_section_wrapper mt-5">

                    <div className="Step4_feilds_wrapper">


                        <div className="mt-2">
                            <div>
                                <div className="Step4_input_label">Type</div>
                                <div className="Step4_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="Step4_input_label">Staat</div>
                                <div className="Step4_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="Step4_input_label">Huurder</div>
                                <div className="Step4_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="Step4_input_label">Te koop bij vastgoedkantoor</div>
                                <div className="Step4_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="step2_btn">Voltooi  <i class='fas fa-chevron-right btn_arrow'></i> <i class='fas fa-chevron-right btn_arrow'></i></button>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Step4
