import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-3'>
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instructor>)
                }

            </div>
        </div>
    );
};

export default Instructors;