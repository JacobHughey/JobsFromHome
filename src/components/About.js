import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import wfhImg from '../img/wfh.jpg'


class About extends Component {
    render() {
        return (
            <div className="About">
                <Card>
                    <Card.Img variant="top" src={wfhImg} />
                    <Card.Body>
                        <Card.Title>About Working At Home</Card.Title>
                        <Card.Text>
                        Working remotely - spefically from the comfort of home, is quickly becoming a prominent trend in today's workforce. What was once limited to only particular types of jobs at a handful of companies is now a commonplace practice with more employers than you might imagine. Remote positions are available in a number of fields including technical support, retail, customer service, data entry, and more.
                        <br /> <br />
                        Many employment seekers are hesitant to apply for work from home jobs, worrying that they may not be not be qualified enough or meet the technological criteria. While that may be true for certain particular positions, there are countless remote career opportunities available nationwide. Each company has its' own specifications, and some are as easy to meet as simply having a computer with an internet connection.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default About

