import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Logo from "../images/Logo.png";

toast.configure()

const IconStylecolor =  styled.span`
color: #3b5998;
svg{
    background-color: white;
    border-radius: 50%;
}

 `;

const Footer = () => {

    const notify = () => {
        toast("Email us at RetroZoneFortMyers@gmail.com", {
            autoClose: false
        })
    }
    return (
        <footer>
        <div> <Link to="/"><span><img src={Logo}alt="Retro Zone Image" /></span></Link> </div>
           <div className=""><span>Copyright 2021</span></div>
           <div className="social-media-links">
               
           <span onClick={notify}> <FontAwesomeIcon icon={faEnvelope} /> </span>

           <IconStylecolor> <FontAwesomeIcon icon={faFacebook} /> </IconStylecolor>

           <div style={{backgroundColor: "white", borderRadius: "10%", display: "flex", width:"12px", height: "14px", justifyContent: "center", alignItems: "center", marginTop: "2px"}}> <FontAwesomeIcon style={{color: "rgb(233, 89, 80)", fontSize: "100%"}} icon={faInstagramSquare} /> </div>
        </div>
     </footer>
)
}
export default Footer