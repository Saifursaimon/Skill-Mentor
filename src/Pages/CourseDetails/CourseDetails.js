import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const CourseDetails = () => {
    const { name, image, details, rating, price, num_participants, num_classes, discount_price, id } = useLoaderData()

    const printRef = useRef()

    return (
        <div className="container mt-4">
            <Link to='/courses'><Button variant='primary'>Back</Button></Link>
            <Card className='w-75 mx-auto my-5' ref={printRef}>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h5>Details</h5>
                    <ReactToPrint
                        trigger={() => <Button variant='success'>Download</Button>}
                        content={() => printRef.current}
                    />
                </Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <p>Total Lectures : {num_classes}</p>
                        <p>Total Students : {num_participants}</p>
                        <p>Ratings : {rating}</p>
                    </Card.Text>
                    <div className='mb-4'>
                        <h3>$ {discount_price}</h3>
                        <del>$ {price}</del> <small>discounted</small>
                    </div>
                    <Link to={`/checkout/${id}`}><Button variant='primary'>Get Premium Access</Button></Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseDetails;