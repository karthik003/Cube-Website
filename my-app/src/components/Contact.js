import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <>
                  <br /><br /><br />
                  <div className=""style={{backgroundColor:"black"}}>

                <div >
                <Form style={{marginRight:"15%",marginLeft:"15%"}}>
                        <div style={{color:"white",fontSize:"250%",fontFamily:"Roboto, sans-serif",fontWeight:"700",textAlign:"left"}}>
                           Drop us a line
                        </div><br />
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="integer" placeholder="Phone Number" />
                                <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" placeholder="Message" />
                                
                            </Form.Group>
                            <div >
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </div>
                                
                            </Form>
                </div>
                
                
            </div>

            </>
        )
    }
}

export default Contact
