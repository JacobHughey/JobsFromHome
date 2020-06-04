import React, { Component } from 'react'
import JobsCard from '../components/JobsCard.js'
import jobsData from '../jobsData.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class AllJobs extends Component {
    render() {
        return (
            <div className="AllJobs">
                <Row>
                    <Col className="text-center mt-4 mb-4">
                        <h2 className="font-weight-bold">All Jobs:</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        jobsData.map((job) => {
                            return (
                                <Col lg={4} className="mb-4">
                                    <JobsCard
                                        jobImg={job.jobImg}
                                        jobName={job.jobName}
                                        aboutJob={job.aboutJob}
                                        link={job.link}
                                        key={job.id}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Col className="text-center mt-3 mb-4">
                    <br />
                    <Button variant="outline-secondary" size="lg" onClick={this.props.toggleAllJobs}>Go Back Home</Button>
                    <br /> <br />
                </Col>
            </div>
        );
    }
}

export default AllJobs
