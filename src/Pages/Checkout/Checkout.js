import React, { useContext } from 'react';
import Billing from '../Billing/Billing';
import { Card, ListGroup } from 'react-bootstrap';
import { AuthContext } from '../../UserContext/UserContext';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { name, price, discount_price } = useLoaderData()

    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                    <Billing></Billing>
                </div>

                <div className="col-12 col-md-4 col-lg-4">
                    <h2>Details</h2>
                    <Card className='shadow'>
                        <ListGroup variant="flush">
                            <ListGroup.Item className='d-flex justify-content-between fs-4'>
                                <p>{name ? name : 'no course selected'}</p>
                                <p> $ {price ? price : '$00'}</p>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-between fs-4 text-success'>
                                <p>Discount - </p>
                                <p>$ 4.99</p>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-between fs-4'>
                                <p>Total </p>
                                <p> $ {discount_price ? discount_price : '$00'}</p>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Checkout;