import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {

    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faq')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])
    console.log(faqs)

    return (
        <div className='container mt-5'>

            <div>
                <Accordion>
                    {

                        faqs.map(faq => <Accordion.Item key={faq.id} eventKey={faq.id}>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>)

                    }
                </Accordion>
            </div>

        </div >
    );
};

export default FAQ;