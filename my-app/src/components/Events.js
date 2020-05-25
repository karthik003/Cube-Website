import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import leaf from '../assets/gallery/3.jpg';
class Events extends Component {
    render() {
        return (
            <div class="container"><br /><br /><br />
            <Carousel >
                <div style={{width:"100%",textAlign:"center",display:"inline-box"}}>
                    <img src={leaf} style={{width:"100%"}}/>
                    <p className="legend">2020</p>
                </div>
                <div style={{justifyContent:"center"}}>
                    <img src={leaf} style={{width:"100%"}} />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{justifyContent:"center"}}>
                    <img src={leaf} style={{width:"100%"}}/>
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
            </div>
        )
    }
}

export default Events
