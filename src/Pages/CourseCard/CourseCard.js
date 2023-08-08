import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaUser, FaStar, FaVideo } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const { id, name, image, num_classes, num_participants, details } = course
    return (
        <div>
            <Card className='mb-4 '>
                <Card.Img variant="top" src={image} style={{ height: '10rem' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <div className='d-flex align-items-center'>
                            <FaVideo></FaVideo>
                            <span className='ms-2'>{num_classes}</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaUser></FaUser>
                            <span className='ms-2'>{num_participants}</span>
                        </div>
                    </div>
                    <Link to={`/courses/${id}`}><Button className='mt-3 w-100' variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;