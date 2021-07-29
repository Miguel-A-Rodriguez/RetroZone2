import React from 'react';
import "../src/css/main.css";
import "../src/css/nav.css";
import Nav from "./components/Nav";
const Home = () => {
    return (
        <body>
           <Nav/>

            <section className="kv-container">
            <h1>Retro Games <b>-</b> Pinball</h1>
            <h1>Classic Console Games</h1>
            <h1>Beer <b>-</b> Wine <b>-</b> Nostalgia</h1>
            </section>

            <section className="kv-slider">

            </section>

            <section className="bottom-info">
            <div className="bottom-info-box">

            </div>
                <div className="bottom-info-box">
                    <span>LOCATION & HOURS</span>
                </div>
                <div className="bottom-info-box">
                    <span>3577 Fowler Street</span>
                    <span>Fort Myers. FL 339O1. US</span>
                    <span>239-266-4605</span>
                    <span>retrozonefortmyers@gmail.com</span>
                    <span>Get Directions</span>
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
                <div className=""><img src="" alt="Retro Zone Img" /></div>
                <div className=""><span>Copyright 2021</span></div>
                <div className="social-media-links">
                <i class="fas mail"></i>
                <i class="facebook"></i>
                <i class="instagram"></i>
                </div>
            </footer>
        </body>
    )
}

export default Home
