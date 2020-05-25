import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <>
                  <br /><br /><br />
                <div class=" " style={{marginRight:"30%",marginLeft:"30%",backgroundColor:"white",borderRadius:"20px",minWidth:"530px"}}> 
                <br />

                    <Form style={{marginRight:"25%",marginLeft:"25%"}}>
                        <div style={{fontSize:"30px",fontFamily:"Roboto, sans-serif",fontWeight:"700",textAlign:"center"}}>
                            CONTACT
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
                            <br />

                        </div>

            </>
        )
    }
}

export default Contact
