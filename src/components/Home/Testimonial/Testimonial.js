import React from 'react';
import wilson from '../../../images/winson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonial = () => {
    return (
        <section className="Testimonial my-5 py-5">
            <div className='container'>
                <div className='section-header'>
                    <h5 className="text-primary text-uppercase ">Testimonial</h5>
                    <h1>What's Our Patients <br/>Says</h1>
                </div>
                <div className='pt-5 row d-flex justify-content-center'>
                    {
                        testimonialData.map(testimonial => <SingleTestimonial testimonial={testimonial} ></SingleTestimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;