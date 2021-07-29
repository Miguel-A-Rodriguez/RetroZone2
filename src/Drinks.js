import React from 'react';
import Nav from "./components/Nav";

const Drinks = () => {
    return (
        <body>
            <Nav/>

            <section className="kv-container">
            <span>Sip Sip Game</span>
            <span><img src="" alt="drinks-kv-img" /></span>
            </section>

            <section className="drinks-txt">
                <span>Soft Drinks</span>
                <p>Soda</p>
                <p>Water</p>
            </section>

            <section className="drinks-txt">
                <span>Craft Beer</span>
                <span>$5.00</span>
                <p>While our selection does change, we only carry Florida brews.</p>
            </section>

            <section className="drinks-txt">
                <span>Domestic</span>
                <span>$3.00</span>
                <p>Bud Light</p>
                <p>Miller Lite</p>
            </section>

            <section className="drinks-txt">
                <span>Import/Seltzer</span>
                <span>$4.00</span>
                <p>Heineken</p>
                <p>White Claw</p>
            </section>

            <section className="drinks-txt">
                <span>Wine</span>
                <span>$5.00</span>
                <p>Selection varies by week.</p>
            </section>

            <section className="drinks-txt">
                <span>Snacks</span>
                <span>$1.00</span>
                <p>Chips</p>
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

export default Drinks