import Courses from '../Courses/Courses';
import Intro from '../Intro/Intro';
import useCourses from '../../hooks/useCourses';
import { Link } from 'react-router-dom';

const Home = () => {
    const [courses] = useCourses();
    const sliceCoursed = courses.slice(0, 4);
    return (
        <div>
            <Intro></Intro>
            <h4 className='my-4'>
                Browse All Courses: <Link to='/allcourses'>
                    <button className='btn btn-primary'>Browse Courses</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 p-3 container mx-auto'>
                {
                    sliceCoursed.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }

            </div>
        </div>
    );
};

export default Home;