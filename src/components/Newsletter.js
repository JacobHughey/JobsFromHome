import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


class Newsletter extends Component {
    render() {
      return (

          <Jumbotron className="text-center mt-4 mb-4">
            <Card className="w-75 mx-auto">
                <Card.Title className="mt-4">Stay in the loop</Card.Title>
                <p>Get the latest when you sign up for our newsletter.</p>
                <form className="form-inline justify-content-center mb-4">
                <div className="form-group">
                    <input type="email" className="form-control" id="newsletterEmail" placeholder="Email Address" />
                </div>
                <Button variant="dark">Submit</Button>
            </form>

            </Card>
          </Jumbotron>
      )
    }
  }
  
  
  export default Newsletter