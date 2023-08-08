import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mt-5'>
            <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
                <div className="mb-5 w-75">
                    <h2 className='mb-4'>Skill Mentor</h2>
                    <p>Welcome to Skill Mentor, your ultimate destination for mastering the art of web development! Whether you're a complete beginner or an experienced coder, our platform offers a wide range of meticulously crafted courses designed to empower you with the skills and knowledge needed to excel in the dynamic world of web development.</p>
                    <Link to='/courses'><Button variant='primary'>Courses</Button></Link>
                </div>
                <div className=" d-flex justify-content-center mb-5">
                    <img src='https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid w-75' />
                </div>
            </div>
        </div >
    );
};

export default Home;