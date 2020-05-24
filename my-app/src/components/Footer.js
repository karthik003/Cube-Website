import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Form,Button } from 'react-bootstrap';

library.add(fab)

class Footer extends Component {
    render() {
        return (
            <>  <br /><br /><br />
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

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div >
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </div>
                                
                            </Form>
                            <br />

                        </div>




                            <footer class="page-footer font-small indigo" style={{color:"white",marginTop:"8%"}}>

                            <div class="container">
                                <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">

                                <div class="col-md-8 col-12 mt-5">
                                    <p style={{lineHeight:"1.7rem",textAlign:"justify"}}>Cubing Union of Brainy Enthusiasts is the first Cubing club ever created in VIT.
                                     Started in the year 2018, this club got its recognition in a very less timespan because of its creative ideology and moto.
                                      C.U.B.E VIT believes in bringing up the very underrated talents of the country especially Rubiks cube solving!
                                      We intend to present a platform to all the talented cubers around us.We are a non-profit professional club to have ideas exchanged between cubers and to ameliorate the skills of cubers 
                                      to help them achieve height in this field by making them compete with the other world-class cubers</p>
                                </div>

                                </div>
                                <hr class="clearfix d-md-none rgba-white-light" style={{margin:"10% 15% 5%"}} />

                                <div class="row pb-3">

                                <div class="col-md-12">

                                    <div style={{width:"100%",textAlign:"center",display:"inline-block",color:"white"}}>

                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'facebook']}  size="2x" />
                                            </a>
                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"  />
                                            </a>
                                            <a class=" mr-4" >
                                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                                            </a>
                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  />
                                            </a>
                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"  />
                                            </a>

                                    </div>

                                </div>

                                </div>

                            </div>

                            <div class="footer-copyright text-center py-3" >Made with ❤️ by
                                <a href=""> C.U.B.E VIT</a>
                            </div>

                            </footer>
                
            </>
        )
    }
}

export default Footer
