import React from 'react';
import "../src/css/main.css";
import "../src/css/nav.css";
import Nav from "./components/Nav";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import Logo from "../src/images/Logo.png";
import { faEnvelope, faFacebook, faInstagramsquare } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

const images = [
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-32-59_1616189610.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210108_012738288.MP_1616189224.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-35-09_1616189742.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/IMG_20210313_175206460_1616189161.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_234441242_1616189228.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210110_181815826_1616189220.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_230257642.MP_1616189217.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_175309581_1616189170.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/FB_IMG_1611160416360_1616189137.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_225432077.MP_1616189215.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/received_251609366525312_1616189143.jpeg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-39-59_1616190026.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210131_225238925_1616016391.jpg?width=2000" },
  { url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/IMG_20210228_190103090_1616189161.jpg?width=2000" },
];


    return (
        <body>
           <Nav/>

            <section className="kv-container">
            <h1>Retro Games <b>-</b> Pinball</h1>
            <h1>Classic Console Games</h1>
            <h1>Beer <b>-</b> Wine <b>-</b> Nostalgia</h1>
            </section>

            <section className="kv-slider">
               <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                startIndex={0}
                navSize={40}
                showNavs={true}
                navMargin={1}
                />
            </section>

           <section className="bottom-info">
      
                <div className="bottom-info-box">
                    <h3>LOCATION & HOURS</h3>
                </div>
                <div className="bottom-info-box">
                    <span>3577 Fowler Street</span>
                    <span>Fort Myers. FL 339O1. US</span>
                    <span>239-266-4605</span>
                    <span>retrozonefortmyers@gmail.com</span>
                    <p>Get Directions</p>
                </div>
                <div className="bottom-info-box">
                    <span>Monday Closed</span>
                    <span>Tuesday Closed</span>
                    <span>Wednesday 12:00pm - 9:00pm</span>
                    <span>Thursday 12:00pm - 9:00pm</span>
                    <span>Friday 12:00pm - 10:00pm</span>
                    <span>Saturday 12:00pm - 10:00pm</span>
                    <span>Sunday 12:00pm - 5:00pm</span>
                </div>
            </section>
         <footer>
             <div> <Link to="/"><span><img src={Logo}alt="Retro Zone Image" /></span></Link> </div>
                <div className=""><span>Copyright 2021</span></div>
                <div className="social-media-links">
                <span> <FontAwesomeIcon icon={faEnvelope} /> </span>
                {/* <span> <FontAwesomeIcon icon={faFacebook} /> </span> */}
                {/* <span> <FontAwesomeIcon icon={faInstagramsquare} /> </span> */}
                </div>
          </footer>
        </body>
    )
}

export default Home
