import React from 'react';
import doctorImg from '../../../images/appatment-doct.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <section className="appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctorImg} alt=""/>
                    </div>
                    <div className="col-md-7 position-relative  text-white py-5">
                        <h5 className="text-primary text-uppercase ">APPOINTMENT</h5>
                        <h1 className="my-4">Make an appointment <br/> Today</h1>
                        <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;