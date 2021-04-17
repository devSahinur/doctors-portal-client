import React from 'react';

const SingleTestimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card col-md-4 single-testimonial shadow-sm">
            <div className="justify-content-center">
                <div className="card-body">
                    <p className="card-text text-center">{quote}</p>
                </div>
                <div className="card-footer justify-content-center d-flex  align-items-center">
                    <div>
                        <img className="mx-3" src={img} alt="" width="60"/>
                    </div>
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div> 
       </div>
    );
};

export default SingleTestimonial;