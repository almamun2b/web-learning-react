import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'

const Intro = () => {
    return (
        <div>
            <div className='intro d-flex align-items-center p-4'>
                <div className='container'>
                    <div className='mb-5 intro-info text-light'>
                        <h1 className='mb-5 '>Learn Effectively that will take you towards your goal.</h1>
                        <p>From scratch, this course will easily swallow everything you need to become a professional web developer without any prior experience. As part of the course, you will do eleven new projects (assignments) by hand. We will give feedback on your project. I will give Marx. So that you can go to the job interview by creating a professional website.</p>
                    </div>

                    <div>
                        <Link to='/instructors'>
                            <button className='btn btn-primary'>See Our Team Members</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;