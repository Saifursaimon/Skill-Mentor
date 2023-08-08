import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Billing = () => {
    return (
        <div>
            <h2 className='mb-4'>Billing Address</h2>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <div>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="First Name" required />
                    </div>
                    <div>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="Last Name" required />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="@ Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between">
                    <div>
                        <Form.Label>Country</Form.Label>
                        <Form.Select className='w-75'>
                            <option>Country</option>
                            <option>Bangladesh</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Label>City</Form.Label>
                        <Form.Select className='w-75'>
                            <option>City</option>
                            <option>Kishoreganj</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="ZIP CODE" required />
                    </div>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3">
                    <h2 className='mb-3'>Payment</h2>
                    <Form.Check

                        type='radio'
                        id='default-radio'
                        label="Credit card"
                    />
                    <Form.Check
                        className="mb-3"
                        type='radio'
                        id='default-radio'
                        label="Debit card"
                    />
                    <Form.Check
                        className="mb-3"
                        type='radio'
                        id='default-radio'
                        label="Paypal"
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <div>
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="Name on Card" required />
                    </div>
                    <div>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="Card Number" required />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <div>
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control className='w-50' type="text" placeholder="" required />
                    </div>
                    <div>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control className='w-50' type="text" placeholder="" required />
                    </div>
                </Form.Group>
                <hr />
                <Button type='submit' variant='primary' className='w-100'>Countinue To Checkout</Button>
            </Form>
        </div>
    );
};

export default Billing;