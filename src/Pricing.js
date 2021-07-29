import React from 'react';
import Nav from "./components/Nav";

const Pricing = () => {
    return (
        <body>
            <Nav/>

            <section className="kv-container">
            <span>Arcade Pricing</span>
            </section>

            <section className="kv-txt">
            <span>UNLIMITED PLAY ON 60+ ARCADE GAMES,</span>
            <span>PINBALL MACHINES, AND CLASSIC</span>
            <span>CONSOLES.</span>
            </section>

            <section className="pricing-txt">
                <span>Unlimited Play Wristbands</span>
                <p>Adults - $20</p>
                <p>Kids (4-12 years old) - $15</p>
                <span>Family 4 packs</span>
                <p>Unlimited play wristbands for 4 players, just $60!</p>
            </section>

            <section className="pricing-txt">
                <span>Free Friend Friday</span>
                <p>BOGO unlimited play wristbands - 2 players for $20.</p>
                <span>Sunday Funday</span>
                <p>2 unlimited play wristbands for $30.</p>
                <span>on the fence? 1 hour play!</span>
                <p>Want to check us out first? We offer 1 hour of unlimited play for $10. Want to add more time? Pay the difference for an all day wristband!</p>
            </section>

            <section className="pricing-txt-bottom">
                <span>Not A Gamer?</span>
                <p>GUESTS ARE WELCOME TO SIT AT OUR BAR/TABLES AND HAVE DRINKS IF NOT PURCHASING A WRISTBAND.</p>
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

export default Pricing
