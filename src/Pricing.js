import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
const Pricing = () => {
    return (
        <body>
            <Nav/>

            <section className="pricing-kv-container">
            <span>{"Arcade\nPricing"}</span>
            </section>

            <main className="pricing-main-txt-container">
                <section className="pricing-kv-txt">
                <h3>UNLIMITED PLAY ON 60+ ARCADE GAMES,</h3>
                <h3>PINBALL MACHINES, AND CLASSIC</h3>
                <h3>CONSOLES.</h3>
                </section>
                <section className="pricing-txt">
                    <h4>Unlimited Play Wristbands</h4>
                    <p>Adults - $20</p>
                    <p>Kids (4-12 years old) - $15</p>
                    <h4>Family 4 packs</h4>
                    <p>Unlimited play wristbands for 4 players, just $60!</p>
                </section>
                <section className="pricing-txt">
                    <h4>Free Friend Friday</h4>
                    <p>BOGO unlimited play wristbands - 2 players for $20.</p>
                    <h4>Sunday Funday</h4>
                    <p>2 unlimited play wristbands for $30.</p>
                    <h4>On the fence? 1 hour play!</h4>
                    <p>Want to check us out first? We offer 1 hour of unlimited play for $10. Want to add more time? Pay the difference for an all day wristband!</p>
                </section>
            </main>

            <section className="pricing-txt-bottom">
                <div><span>Not A Gamer?</span></div>
                <div>
                    <p>GUESTS ARE WELCOME TO SIT AT OUR BAR/TABLES AND HAVE DRINKS IF NOT PURCHASING A WRISTBAND.</p>
                </div>
            </section>
            <Footer/>
        </body>
    )
}

export default Pricing
