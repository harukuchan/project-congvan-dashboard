import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col, Button, Nav} from "react-bootstrap";
import "../Css/styleAdmin.css";
class Admin extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col>
                        <Nav.Link href="/admin">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Col>
                    <Col md={9}>Content</Col>
                    <Col><Button variant="outline-dark">Log out</Button></Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Admin;