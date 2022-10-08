import React from "react";
import mail from "./images/Mail.png";
import linkedin from "./images/linkedin.png";

export default function Information() {
    return (
        <div className="information">
            <input className="name" placeholder="Laura Smith"/>
            <input className="role" placeholder="Frontend Developer"/>
            <input className="site" placeholder="laurasmith.website"/>
            <div className="buttons">
               <button className="button1">
                   <img src={mail} className="icon"/> Email
               </button>
               <button className="button2">
                   <img src={linkedin} className="icon"/> LinkedIn
               </button>
            </div>
            <div className="about">
                <h3>About</h3>
                <textarea className="text" placeholder="I am a frontend developer with a particular interest 
                in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, 
                and am always looking for new things to learn."/>
            </div>
            <div className="about">
                <h3>Interests</h3>
                <textarea className="text" placeholder="Food expert. Music scholar. 
                Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                Travel geek. Pop culture ninja. Coffee fanatic."/>
            </div>

        </div>
    )
}