import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import { ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className="container mt-5 p-3">
            <div className="row justify-content-center ">
                <div className="col-12 col-md-8 col-lg-8">
                    <div className="row justify-content-center">
                        <h2 className='text-center mb-4'>All Courses</h2>
                        {
                            courses.map(course => <div className='col-12 col-md-6 col-lg-4 align-items-center' key={course.id}><CourseCard course={course}></CourseCard></div>)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 shadow-lg h-50 mt-5 rounded">
                    <div className="row ">
                        <h2 className='text-center mb-4 mt-4' >Latest Courses</h2>
                        <ListGroup variant="flush">
                            {
                                courses.map(course => <ListGroup.Item key={course.id}>
                                    <Link to={`/courses/${course.id}`} className='d-flex text-black text-decoration-none'>
                                        <img className='w-25 me-4 rounded' src={course.image} />
                                        <div>
                                            <h6>{course.name}</h6>
                                            <p className='d-flex align-items-center'>
                                                <FaStar className='text-warning me-2'></FaStar>
                                                {course.rating}
                                            </p>
                                        </div>

                                    </Link>
                                </ListGroup.Item>)
                            }
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;