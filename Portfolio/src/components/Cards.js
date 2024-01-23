import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const Cards = () => {
    const [fields] = useState([
        "WEB DEVELOPMENT",
        "MOBILE DESIGN",
        "LOGO DESIGN",
        " WEB APPLICATION DEVELOPMENT",
        "MOBILE APPLICATION DEVELOPMENT",
        "PWA DEVELOPMENT",
    ]);

    return (
        <Container>
            <Row>
                {fields.map((item, index) => {
                return (
                    <Col
                    className={`col-3 square border border-secondary text-center py-5 m-5 text-white bg-${
                        index % 2 === 0 ? "dark" : "secondary"
                    }`}
                    >
                    {item}
                    </Col>
                );
                })}
            </Row>
        </Container>
    );
};

export default Cards;
