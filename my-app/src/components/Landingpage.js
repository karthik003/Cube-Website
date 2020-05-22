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
                                <div style={{width:"100%",height:"50%",textAlign:"center",fontSize:"100px",marginTop:"50px",color:"white",fontFamily:"Titillium Web"}}>
                                <br /> C.U.B.E
                                </div><br />
                                <div style={{width:"100%",height:"50%",textAlign:"center",fontSize:"250%",color:"white",marginTop:"50px"}}>
                                <ReactTypingEffect text={[ "Life is like a RUBIK'S CUBE!", "There is always a solution!" ]} /> 
                                </div>
                            </div>
                        <div style={{textAlign:"center",display:"inline-block",width:"100%"}}>
                       <FontAwesomeIcon type="button" icon={faAngleDown} size="3x" onClick={this.handleOnClick} color="white"></FontAwesomeIcon>
                        </div>
                        
                    </div>
               <div style={{textAlign:"center",backgroundColor:"black"}}>
               <br/><br/><br/><br/>

                    <h1 style={{color:"white"}} >DOMAINS</h1><br /><br /><br />
                    <div class="row" style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <div class="col-3" style={{minWidth:"300px",textAlign:"center",display:"inline-block",width:"100%"}}>    
                            <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="250px" />}>
                                <Meta title="Speedcubers" description="" />
                            </Card>
                        </div>
                        <div class="col-3" style={{minWidth:"300px",textAlign:"center",display:"inline-block",width:"100%"}}>    
                            <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="250px" />}>
                                <Meta title="Enthusiasts" description="" />
                            </Card>
                        </div>
                        <div class="col-3" style={{minWidth:"300px"}}>    
                            <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="250px" />}>
                                <Meta title="Management" description="" />
                            </Card>
                        </div>
                        <div class="col-3" style={{minWidth:"300px"}}>    
                            <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  height="250px"/>}>
                                <Meta title="Design" description="" />
                            </Card>
                        </div>
                    </div>
               </div>

               <div class="footer" ref={this.myDivToFocus} style={{backgroundColor:"black"}}>
                    <Footer />
               </div>

            </div>
           
        )
    }
}

export default Landingpage;
