import React, { Component } from 'react'
import { Navbar,Button,NavDropdown,Nav } from 'react-bootstrap';
import cube from '../assets/cube.png'
class Navibar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect bg="dark" expand="lg" fixed="top">
                <img src={cube} href="#home" className="mr-5" alt="cube" style={{width:"100px",height:"40px",marginBottom:"10px",color:"white"}}/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav >
                            <Nav.Link className="mr-4 " href="#home" style={{fontFamily:"Roboto, sans-serif",color:"#F4F4F4",fontSize:"18px"}}>HOME</Nav.Link>
                            <Nav.Link className="mr-4 " href="#link" style={{fontFamily:"Roboto, sans-serif",color:"#F4F4F4",fontSize:"18px"}}>EVENTS</Nav.Link>
                            <Nav.Link className="mr-4 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px"}}>GALLERY</Nav.Link>
                            <Nav.Link className="mr-4 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px"}}>TEAM</Nav.Link>
                            <Nav.Link className="mr-4 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px"}}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navibar
