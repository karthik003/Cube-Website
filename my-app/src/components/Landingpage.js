import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'antd/dist/antd.css';
import './Landingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDown,faBars,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cube from '../assets/cube.png'
import { Card } from 'antd';
import Footer from './Footer.js';
import ReactTypingEffect from 'react-typing-effect';
import Domains from './Domains.js';
import Events from './Events.js';
import Contact from './Contact.js';
const { Meta } = Card;

class Landingpage extends Component {
    constructor(props){
        super(props)
        this.state = {
       
        }
        //creates a reference for your element to use
        this.myDivToFocus = React.createRef()
     }
     handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    render() {
        return (
            <div>
                    <div class="pageone" style={{width:"100%"}}>
                            <div style={{height:"550px"}}>  
                                <div style={{width:"100%",textAlign:"center",fontSize:"100px",marginTop:"50px",color:"white",fontFamily:"Titillium Web"}}>
                                <br /> C.U.B.E
                                </div><br />
                                <div style={{width:"100%",height:"50%",textAlign:"center",fontSize:"250%",color:"white",marginTop:"50px"}}>
                                <ReactTypingEffect speed={100} eraseDelay={2000} typingDelay={500} text={[ "Life is like a Rubik's Cube.", "There is always a solution." ]} /> 
                                </div>
                            </div>
                        <div style={{position:"absolute",top:"90%",left:"50%"}}>
                       <FontAwesomeIcon type="button" icon={faAngleDown} size="3x" onClick={this.handleOnClick} color="white"></FontAwesomeIcon>
                        </div>
                        
                    </div>
               <Domains />
               <Events />
               <Contact />
               <div class="footer" ref={this.myDivToFocus} style={{backgroundColor:"black"}}>
                    <Footer />
               </div>

            </div>
           
        )
    }
}

export default Landingpage;
