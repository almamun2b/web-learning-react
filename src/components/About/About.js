import React from 'react';

const About = () => {
    return (
        <div>
            <div className=" rounded-3 p-3 shadow-lg h-100">
                <h3 className='my-3 text-primary'>We Help You Learn, What You Love</h3>
                
                <p className='w-50 mx-auto'>From scratch, this course will easily swallow everything you need to become a professional web developer without any prior experience. As part of the course, you will do eleven new projects (assignments) by hand. </p>

                <div className='w-25 mx-auto'>
                    <img className='rounded-circle img-fluid' src='https://randomuser.me/api/portraits/men/1.jpg' alt="" />
                </div>
                <div>
                    <h4 className='text-primary mt-3'>Owner of the Site: Stephana Taill</h4>
                </div>
                <div className='mt-2 card-body'>
                    <p><span className='fw-bold'>Designation:</span> Front End Web Developer</p>
                    <p><span className='fw-bold'>Email:</span> almamun2b@gmail.com</p>
                    <p><span className='fw-bold'>Phone:</span> +8801745323411</p>
                </div>
            </div>
        </div>
    );
};

export default About;