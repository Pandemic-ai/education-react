import React, { Component } from 'react';

export class VirtualClass extends Component {
    render () {
        return (
        <div className="container-fluid row ml-0 " style={{background: "#c9c9f1"}}>
            <div className="col-md-4 mt-2">
                <div className="col-md-12 ">
                    <img  src="https://image.shutterstock.com/z/stock-photo-focused-mixed-race-woman-wearing-headphones-watching-webinar-write-notes-study-online-with-online-1375976735.jpg" alt=""/>
                </div>
                <div className="row p-3">
                    <div className="col-md-6">
                        <img className="" src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img className=""  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg" alt=""/>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-6">
                        <img className="" src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img className=""  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="mt-2 col-md-8">
                <img style={{width: "100%", height: "700px"}} src="https://ae01.alicdn.com/kf/HTB12F3FXK6sK1RjSsrbq6xbDXXaY/Optical-infrared-electronic-white-board-for-schools-conference-with-most-cheap-price.jpg" alt=""/>
            </div>
         </div>
        )
    }
}

export default VirtualClass;