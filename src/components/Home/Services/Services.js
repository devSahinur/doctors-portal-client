import React from 'react';
import fuloride from '../../../images/Fluoride.png'
import Cavity from '../../../images/cavity.png'
import Teath from '../../../images/Teath.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fuloride,
    },
    {
        name: 'Cavity Filling',
        img: Cavity,
    },
    {
        name: 'Teath Whitening',
        img: Teath,
    }
]

const Services = () => {
    return (
        <section className='container services-container mt-5'>
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row pt-5 w-75%">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;