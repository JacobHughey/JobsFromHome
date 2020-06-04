import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Jobs at Home</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#menu" onClick={this.props.toggleNav}><FontAwesomeIcon icon={faBars} size="lg" /></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header
