import React from 'react';

import Hero from '../../components/hero/hero';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// class component
class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        // initialises state
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }


    // handchange event for when user is typing
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    // handle submit event for when user submits information
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);

        this.setState({
            disabled: true
        });

        // posts data to the specific route
        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                // successful response
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            // error response
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

        render() {
        return(  
            <div>
                {/* renders contact page title */}
                <Hero />

                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={5}>

                        {/* renders form elements */}
                        <Form onSubmit={this.handleSubmit}>
                            {/* full name */}
                            <Form.Group>
                                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </Form.Group>

                            {/* email */}
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>

                            {/* message */}
                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                            </Form.Group>

                            {/* submit button */}
                            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                Send
                            </Button>

                            {/* displays either success or error message */}
                            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                        </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactPage;