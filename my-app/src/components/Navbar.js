import React, { Component } from 'react'
import { Navbar,Button,NavDropdown,Nav } from 'react-bootstrap';
import cube from '../assets/cube.png'
class Navibar extends Component {
    render() {
        return (
             <div>  
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"white"}} fixed="top"> 
                <Navbar.Brand href="#home" style={{height:"100%"}}>
                    <img  src={cube} style={{width:"50px",height:"20px"}}/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"style={{justifyContent:"center"}}>
                            <Nav.Link className="mr-1  " href="#home" style={{fontFamily:"Roboto, sans-serif",color:"black",fontSize:"18px",fontWeight:"700"}}>HOME</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif",color:"black",fontSize:"18px",fontWeight:"700"}}>ABOUT</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"black",fontSize:"18px",fontWeight:"700"}}>TEAMS</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"black",fontSize:"18px",fontWeight:"700"}}>CONQUESTS</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"black",fontSize:"18px",fontWeight:"700"}}>CONTACT</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navibar
