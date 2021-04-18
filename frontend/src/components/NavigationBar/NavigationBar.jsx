import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Link to="/" className="navbar-brand">
                        Ticket App
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link text-primary">
                                Home
                            </Link>

                            <Link to="/create" className="btn btn-primary">
                                Create Ticket
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr style={{ marginTop: '0' }}></hr>
            </>
        );
    }
}
