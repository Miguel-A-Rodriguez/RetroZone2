import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logo from "../images/Logo.png";


toast.configure()

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
           <span> <FontAwesomeIcon icon={faFacebook} /> </span>
           <span> <FontAwesomeIcon icon={faInstagramSquare} /> </span>
           </div>
     </footer>
)
}
export default Footer