import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'






class Jumbo extends Component {
    render() {
        return (
            <div className="Jumbo">
                <Jumbotron className="text-center bg-muted">
                    <h1 className=" display-4">Work remotely from anywhere</h1>
                    <p className="lead">Expertly curated remote jobs in tech, marketing, customer support and more</p>
                    <form className="form-inline justify-content-center">
                        <div className="form-group">
                            <input type="search"
                            className="form-control"
                            id="searchQuery"
                            placeholder="Serach"
                            size="25" />
                            <Button variant="outline-secondary">Search</Button>
                        </div>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbo
