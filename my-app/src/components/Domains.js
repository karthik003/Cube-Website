import React, { Component } from 'react'
import { Card } from 'antd';

const { Meta } = Card;
 class Domains extends Component {
    render() {
        return (
            <>
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
                
            </>
        )
    }
}

export default Domains
