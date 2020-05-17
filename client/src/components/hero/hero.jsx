import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// returns jumbtron title for the contact page
function Hero() {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 text-center">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h2 className="display-4 font-weight-light">Contact Us</h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;