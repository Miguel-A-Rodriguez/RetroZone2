import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Parties = () => {
    return (
        <body>
            <Nav/>

            <section className="party-kv-container">
                <div className="party-kv-img"></div>
                <span>Relive your childhood.
                    book today.
                </span>
            </section>

            <section className="party-txt-header">
                <span>GENERAL AND PRIVATE PARTIES, CORPORATE MEETINGS, HOLIDAY GATHERINGS, ETC.</span>
                <p>At the Retro Zone Arcade, you have the freedom to create an event that meets your needs.</p>
            </section>

            <section className="party-txt">
                <span>General PARTIES</span>
                <ul>
                    <li>Tables reserved for 2 hours.</li>
                    <li>Cost is $10 per person for unlimited game play, with a 10 person minimum. <br/> (Full rate applies for less than 10)</li>
                    <li>Guests can stay and play beyond the duration of their table reservation.</li>
                    <li>Outside food and non-alcoholic drinks permitted.</li>
                    <li>General party booking is available any day or time!</li>
                </ul>
            </section>

            <section className="party-txt">
                <span>private events & parties</span>
                <ul>
                    <li>$150 per hour (2 hour minimum)</li>
                    <li>Guests will have exclusive access to the entire arcade during your 2 hours.</li>
                    <li>Choose the start and end time of your reservation. There are no time limits.</li>
                    <li>Outside food and non-alcoholic drinks are permitted.</li>
                    <li>Check with the arcade for availibility.</li>
                </ul>
            </section>

            <Footer/>
        </body>
    )
}

export default Parties