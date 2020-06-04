import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class JobsCard extends Component {
    render() {
        return (
            <div className="JobsCard">
                <Card>
                    <Card.Img variant="top" className="img-fluid cardImage" src={this.props.jobImg}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.props.jobName}</Card.Title>
                        <Card.Text>{this.props.aboutJob}</Card.Text>
                        <a href={this.props.link} className="stretched-link">Apply Now</a>
                    </Card.Body>
                    </Card>
            </div>
        );
    }
}

export default JobsCard


