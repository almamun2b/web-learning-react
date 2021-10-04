import React from 'react';

const Courses = (props) => {
    const { image, name, instructor } = props.course;

    // console.log(props)
    return (
        <div className="col">
            <div className="card rounded-3 p-3 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div>
                    <h4 className='text-primary mt-3'>Course Title: {name}</h4>
                </div>
                <div className='mt-2 card-body'>
                    <p><span className='fw-bold'>Instructor Name:</span> {instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;