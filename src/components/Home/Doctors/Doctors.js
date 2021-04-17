import React from 'react';
import doctorImg from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        name: 'Dr. Cudi',
        img : doctorImg,
        namber : '+880-188-934789'
    },
    {
        name:'Dr. Sinthia',
        img : doctorImg,
        namber : '+880-188-547222'
    },
    {
        name:'Dr. Cudi',
        img : doctorImg,
        namber : '+880-188-934666'
    },
]

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="d-flex justify-content-center">
                    <div className="row pt-5 w-75%">
                        {
                            doctorData.map(doctor => <Doctor doctor={doctor} key={doctor.namber}></Doctor>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;