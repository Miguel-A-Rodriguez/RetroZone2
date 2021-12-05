import React, { useEffect } from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
const Events = () => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);


    return (
        <body>
            <Nav/>
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0" nonce="dYQQZCmY">

            </script>
            <section className="events-kv-container">
                <span>FUN FOR THE WHOLE FAMILY
                </span>
                <div className="events-kv-img"></div>
            </section>

            <div class="events-txt-box">
                <section className="events-txt">
                    <span>Big time 80's</span>
                    <span>SPRING</span>
                    <span>BREAK-A-THON</span>
                    <p>Extended Hours</p>
                    <p>(Open at 12 during the week)</p>
                    <p>2/$30 Game Play</p>
                </section>
                <section className="events-txt">
                    <span>GAME & GRUB</span>
                    <span>3/27/21</span>
                    <p>Kona Ice of Fort Myers Shores will</p>
                     <p>join us from 5-8pm. Get a sweet </p>
                     <p>treat and earn $5 off at the</p>
                     <p>arcade!</p>
                       </section>
                <section className="events-txt">
                    <span>GAME & GRUB</span>
                    <span>4/24/21</span>
                    <p>Dynamite Street Eats will join us from </p>
                    <p>5-8pm. Get some grub and earn $5 </p>
                    <p>off at the arcade!</p>
                </section>
                <section className="events-txt">
                    <span>POKEMON/LEAGUE</span>
                    <p>Every Wednesday @ 6:30pm</p>
                    <p>Registration: 5:30pm-6:25pm</p>
                    <p>Entry: $5.00</p>
                    <p>Format: Standard</p>
                    <p>Prizing: Pack/Arcade credit based on attendance.</p>
                </section>
                <section className="events-txt">
                    <span>Yu-Gi-Oh Weekly</span>
                    <p>Every Friday at 7:00pm</p>
                    <p>Entry: $5.00</p>
                    <p>Format: Advanced (Swiss Rounds with payout after final round of Swiss)</p>
                    <p>Prizing: Pack/Arcade credit based on attendance.</p>
                </section>
            </div>

            <section className="bottom-event-txt">
                <h1>WHATS HAPPENING AT THE RETRO ZONE</h1>
                <h2>Follow us on Facebook and Instagram to get the latest updates on deals
                    and events!
                </h2>
            </section>

            <section className="facebook-conent-container">
            {/* <div class="fb-page" 
                    data-tabs="timeline"
                    data-href="https://www.facebook.com/retrozonearcade/">
            </div> */}
            <div class="fb-page" data-href="https://www.facebook.com/retrozonearcade/" data-tabs="timeline" data-width="400" data-height="800" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
            </section>
            <Footer/>
        </body>
    )
}

export default Events