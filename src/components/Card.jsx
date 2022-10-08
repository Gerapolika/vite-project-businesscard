import React from "react";
import jane from "./images/Jane.png";
import Information from "./Information";
import twi from "./images/Twitter icon.png";
import facebook from "./images/Facebook icon.png";
import insta from "./images/Instagram icon.png";
import github from "./images/GitHub icon.png";


export default function Card() {
    return (
        <div className="container">
            <img src={jane} alt="photo" className="photo"/>
            <div>
                <Information />
            </div>
            <footer className="icons">
               <img src={twi} alt="photo" className=""/>
               <img src={facebook} alt="photo" className=""/>
               <img src={insta} alt="photo" className=""/>
               <img src={github} alt="photo" className=""/>
            </footer>
        </div>
    )
}