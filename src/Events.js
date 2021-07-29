import React from 'react';
import Nav from "./components/Nav";

const Events = () => {
    return (
        <body>
            <Nav/>

            <section className="kv-container">
            <span>FUN FOR THE</span>
            <span>WHOLE FAMILY</span>
            <span><img src="" alt="drinks-kv-img" /></span>
            </section>

            <section className="drinks-txt">
                <span>Big time 80's</span>
                <span>SPRING</span>
                <span>BREAK-A-THON</span>
                <p>Extended Hours</p>
                <p>(Open at 12 during the week)</p>
                <p>2/$30 Game Play</p>
            </section>

            <section className="drinks-txt">
                <span>GAME & GRUB</span>
                <span>3/27/21</span>
                <p>Kona Ice of Fort Myers Shores will</p>
                 <p>join us from 5-8pm. Get a sweet </p>
                 <p>treat and earn $5 off at the</p>
                 <p>arcade!</p>
                   </section>

            <section className="drinks-txt">
                <span>GAME & GRUB</span>
                <span>4/24/21</span>
                <p>Dynamite Street Eats will join us from </p>
                <p>5-8pm. Get some grub and earn $5 </p>
                <p>off at the arcade!</p>
            </section>

            <section className="drinks-txt">
                <span>POKEMON/LEAGUE</span>
                <p>Every Wednesday @ 6:30pm</p>
                <p>Registration: 5:30pm-6:25pm</p>
                <p>Entry: $5.00</p>
                <p>Format: Standard</p>
                <p>Prizing: Pack/Arcade credit based on attendance.</p>
            </section>

            <section className="drinks-txt">
                <span>Yu-Gi-Oh Weekly</span>
                <p>Every Friday at 7:00pm</p>
                <p>Entry: $5.00</p>
                <p>Format: Advanced (Swiss Rounds with payout after final round of Swiss)</p>
                <p>Prizing: Pack/Arcade credit based on attendance.</p>
            </section>

            <section className="bottom-event-txt">
                <h1>WHATS HAPPENING AT THE RETRO ZONE</h1>
                <h2>Follow us on Facebook and Instagram to get the latest updates on deals
                    and events!
                </h2>
            </section>

            <section className="facebook-conent-container">
                
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

export default Events