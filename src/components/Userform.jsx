import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import './Userform.css';

const Userform = () => {
    const {choices } = useContext( AppContext );
    const [state, setstate] = useState(1200)
useEffect(()=>{
   
    window.addEventListener('resize',()=>setstate(window.innerWidth))
},[])
    return (

                <div className="exit-main">   
                    <div className ="exit-div">
                        <div className="exit-label">
                            <div className="exit-text">
                                While the focus of food testing has traditionally been on raw materials and finished product, a preventive approach through establishing an environmental monitoring program can help identify and correct potential issues before they lead to a major problem or recall. <br/><br/>Learn how with this comprehensive Environmental Monitoring Handbook from 3M, Cornell University, and other industry experts!
                            </div>
                            <div className ="download-pdf">
                                <button className="handbook-download-btn">DOWNLOAD HANDBOOK</button>
                            </div> 
                        </div>   
                        <div className="exit-img-div">
                            {/* <article><img src="/images/desktop/Exit/exit_screen.png" alt="exit_page" className="exit-image-desktop"/></article> */}
                            {/* <article><img src="/images/iphone/Exit/exit_screen.png" alt="exit_page" className="exit-image"/></article> */}
                        {/* {state>375 ?  <img src="/images/desktop/Exit/exit_screen.png" alt="exit_page" className="exit-image"></img> : <img src="/images/iphone/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>} */}
                        {/* {state>786 ?  <img src="/images/desktop/Exit/exit_screen.png" alt="exit_page" className="exit-image"></img> :state>375 ?  <img src="/images/ipad/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>:<img src="/images/iphone/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>} */}
                        {state>=1920 ? <img src="/images/desktop/Exit/exit_screen.png" alt="exit_page" className="exit-image"></img>:state>=1024 ?  <img src="/images/ipad/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>:state>=768 ? <img src="/images/ipad/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>:<img src="/images/iphone/Exit Screen 01/illustration_exit screen 01.png" alt="exit_page" className="exit-image"></img>}
                        </div>
                    </div> 
                    <div className="general-info">
                        <div className="general-info-text">
                            Connect with a 3M expert to learn more about how to approach <br />
                            environmental monitoring in your facility.
                        </div>
                        <div className="get_connected_div">
                            <button className="get_connected_btn">Get Connected</button>
                        </div>  
                    </div>
                </div>    
    )
}
/*
The answers given by user are collected as choices and sent at lines 32 33 and 34
*/
export default Userform