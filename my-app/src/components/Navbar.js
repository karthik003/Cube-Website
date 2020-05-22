import React, { Component } from 'react'
import { Navbar,Button,NavDropdown,Nav } from 'react-bootstrap';
import cube from '../assets/cube.png'
class Navibar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" fixed="top">
                <img src={cube} href="#home" className="mr-5" alt="cube" style={{width:"100px",height:"40px",marginBottom:"10px",color:"white"}}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center offset-3">
                        <Nav >
                            <Nav.Link className="mr-3 ml-5 " href="#home" style={{fontFamily:"Titillium Web",color:"#F4F4F4",fontSize:"20px"}}><b>Home</b></Nav.Link>
                            <Nav.Link className="mx-3 " href="#link" style={{fontFamily:"Titillium Web",color:"#F4F4F4",fontSize:"20px"}}><b>Events</b></Nav.Link>
                            <Nav.Link className="mx-3 " href="#link" style={{fontFamily:"Titillium Web",color:"#F4F4F4",fontSize:"20px"}}><b>Gallery</b></Nav.Link>
                            <Nav.Link className="mx-3 " href="#link" style={{fontFamily:"Titillium Web",color:"#F4F4F4",fontSize:"20px"}}><b>Team</b></Nav.Link>
                            <Nav.Link className="ml-3 " href="#link" style={{fontFamily:"Titillium Web",color:"#F4F4F4",fontSize:"20px"}}><b>Contact </b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navibar
