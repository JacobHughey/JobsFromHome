import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/CustomNav.css'


class CustomNav extends Component {
    render() {
        return (
            <div className="CustomNav text-center mt-4">
                <Row className="mb-4">
                    <Col sm={6}>
                        <img className="nav-item" alt="home" src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png" /><br />
                        <p>HOME</p>
                        <img className="nav-item" alt="jobs" src="https://maxcdn.icons8.com/Share/icon/ios7/Business//find_matching_job1600.png" /><br />
                        <p>JOBS</p>
                    </Col>
                    <Col sm={6}>
                        <img className="nav-item" alt="newsletter" src="https://cdn1.iconfinder.com/data/icons/simple-icons/2048/email-2048-black.png" /><br />
                        <p>NEWSLETTER</p>
                        <img className="nav-item" alt="search" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png" /><br />
                        <p>SEARCH</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CustomNav
