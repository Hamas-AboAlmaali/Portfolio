import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';



const Cards = ()=> {
    return(
    <Container>
        <Row>
            <Col className = 'square border border-secondary text-center py-5 m-5 text-white bg-secondary'>WEB DEVELOPMENT</Col>
            <Col className = 'square border border-secondary text-center py-5 m-5 bg-dark text-white '>MOBILE DESIGN</Col>
            <Col className = 'square border border-secondary text-center py-5 m-5 text-white bg-secondary'>LOGO DESIGN</Col>
        </Row>
        <Row>
            <Col className = 'square border border-secondary text-center py-5 m-5 text-white bg-dark'>WEB APPLICATION DEVELOPMENT</Col>
            <Col className = 'square border border-secondary text-center py-5 m-5 text-white bg-secondary'>MOBILE APPLICATION DEVELOPMENT</Col>
            <Col className = 'square border border-secondary text-center py-5 m-5 text-white bg-dark'>PWA DEVELOPMENT</Col>
        </Row>
    </Container>
    )
}

export default Cards