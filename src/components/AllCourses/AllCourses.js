import useCourses from '../../hooks/useCourses';
import Courses from '../Courses/Courses';

const AllCourses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 mx-auto'>
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default AllCourses;