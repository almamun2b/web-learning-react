import React from 'react';

const Courses = (props) => {
    const { image, name, instructor, length, price, lesson } = props.course;
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>Course Title: {name}</h4>
                    <p><span className='fw-bold'>Instructor Name: </span> {instructor}</p>
                    <p><span className='fw-bold'>Length: </span> {length} Hours</p>
                    <p><span className='fw-bold'>Lesson: </span> {lesson} Chapters</p>
                    <h4><span className='fw-bold'>Price: </span> $ {price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Courses;