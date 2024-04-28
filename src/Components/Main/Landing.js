import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Parse from "parse";


export default function Landing() {

    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1 className="mb-3">Welcome to Chill Fitness</h1>
                    <p className="lead text-muted mb-4">
                        Track and understand your fitness journey with state-of-the-art visualizations and data analysis.
                    </p>
                </Col>
                <Nav.Link href="/about" className="text-white bg-primary px-3 py-2 rounded">
                    Learn More
                </Nav.Link>
            </Row>
        </Container>
    );
    };
