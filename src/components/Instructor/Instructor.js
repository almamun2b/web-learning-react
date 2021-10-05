import React from 'react';

const Instructor = (props) => {
    const { image, name, email, gender, phone, designation } = props.instructor;
    return (
        <div className="col">
            <div className="card rounded-3 p-3 shadow-lg h-100">
                <div>
                    <img className='rounded-circle' src={image} alt="" />
                </div>
                <div>
                    <h4 className='text-primary mt-3'>Name: {name}</h4>
                </div>
                <div className='mt-2 card-body'>
                    <p><span className='fw-bold'>Designation:</span> {designation}</p>
                    <p><span className='fw-bold'>Gender:</span> {gender}</p>
                    <p><span className='fw-bold'>Email:</span> {email}</p>
                    <p><span className='fw-bold'>Phone:</span> {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;