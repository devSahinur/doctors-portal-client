import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = (props) => {
    const {name, namber , img} = props.doctor;
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>{name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>{namber}</p>
        </div>
    );
};

export default Doctor;