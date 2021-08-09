import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Drinks = () => {
    return (
        <body>
            <Nav/>

            <section className="drinks-kv-container">
                <span>SIP SIP GAME
                </span>
                <div className="drinks-kv-img"></div>
            </section>

            <div class="drink-txt-box">
                <section className="drinks-txt">
                    <span>Soft Drinks</span>
                    <p>Soda</p>
                    <p>Water</p>
                </section>
                <section className="drinks-txt">
                    <span>Craft Beer</span><br/>
                    <span>$5.00</span>
                    <p>While our selection does change, we<br/> only carry  Florida brews.</p>
                </section>
                <section className="drinks-txt">
                    <span>Domestic</span><br/>
                    <span>$3.00</span>
                    <p>Bud Light</p>
                    <p>Miller Lite</p>
                </section>
            
                <section className="drinks-txt">
                    <span>Import/Seltzer</span><br/>
                    <span>$4.00</span>
                    <p>Heineken</p>
                    <p>White Claw</p>
                </section>
                <section className="drinks-txt">
                    <span>Wine</span><br/>
                    <span>$5.00</span>
                    <p>Selection varies by week.</p>
                </section>
                <section className="drinks-txt">
                    <span>Snacks</span><br/>
                    <span>$1.00</span>
                    <p>Chips</p>
                </section>
            
            </div>

            <Footer/>
        </body>
    )
}

export default Drinks