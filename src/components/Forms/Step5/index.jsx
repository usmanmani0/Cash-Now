import React from 'react'
import "../Step5/step5.css"
import Step3 from '../Step3'

const Step5 = () => {
    return (
        <>
            <div className="">
                <div className="d-flex justify-content-center mt-5">
                    <div className="step5_heading"><span className="step2_tag">Stap 5:</span> Situatieschets</div>
                </div>
                <div className="Step5_form_section_wrapper mt-5">

                    <div className="Step5_feilds_wrapper">


                        <div className="mt-2">
                            <div>
                                <div className="Step5_input_label">Wenst u snel te verkopen </div>
                                <div className="Step5_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="Step5_input_label">Reden van verkoop</div>
                                <div className="Step5_Telefoonnummer">
                                    <input type="text" />
                                </div>
                            </div>


                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="step2_btn">Voltooi  <i class='fas fa-chevron-right Step5_btn_arrow'></i> <i class='fas fa-chevron-right btn_arrow'></i></button>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Step5
