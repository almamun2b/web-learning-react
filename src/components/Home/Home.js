import Courses from '../Courses/Courses';
import Intro from '../Intro/Intro';
import useCourses from '../../hooks/useCourses';

const Home = () => {
    const [courses] = useCourses();
    console.log(courses);
    return (
        <div>
            <Intro></Intro>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-3 container mx-auto'>
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

export default Home;