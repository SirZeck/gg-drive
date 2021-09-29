import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar className="p-2 mb-2" bg="light-gray" expand="xxxl">
            <Navbar.Brand className="m-2" as={Link} to="/">
                GG Drive
            </Navbar.Brand>

            <Nav>
                <Nav.Link className="p-2 mb-2" as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
            
        </Navbar>
    )
}
