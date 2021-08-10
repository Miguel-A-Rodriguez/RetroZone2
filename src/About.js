import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const About = () => {
    return (
        <body>
            <Nav/>

            <section className="about-kv-container">
                <div className="about-kv-img"></div>
                <div class="about-title-container">
                    <span>RETRO ZONE</span>
                    <span>ARCADE</span>
                </div>
            </section>

            <section className="about-txt">
               
                
                    <span>CLASSIC<br/> 80'S ARCADE</span>
                    <div class="about-txt-flex-column">
                        <p>The Retro Zone Arcade is a flat rate arcade with a bar. Offering all you can play gaming on a variety of arcade classics. Best part is that no quarters or tokens are needed!</p>
                        <p>The Retro Zone is also available to rent for birthdays and private events.</p>
                    </div>
            </section>
                    
                               
                    <section className="about-txt-bottom-kv">
                            
                  <div className="nelsons-story-container">
                    <span>THE NELSONS</span>
                    <p>New owners, Mathew and Ashley Nelson had talked about opening an arcade, but it was just that. Talk. A dream. When the opportunity came to possibly buy an existing arcade, they decided it was now or never! They jumped right into ownership in early March 2020, with nothing but positivity. Of course, realizing a dream couldn't be THAT easy. Cue Covid and lockdowns within two weeks of being in business.
                    </p>
                    <p>The past year has been quite the adventure. Two closures, a beer and wine license, and a new location later, the Nelson's are proud to say that the Retro Zone Arcade is still alive and kickin'! It hasn't been easy but they are thankful that the gaming community has stuck by them through this first year.
                    </p>
                    <p>
                    Keep an eye out because the Retro Zone is working hard to bring in more games, tournaments, events, and nostalgia your way!
                    </p>
                 </div>
                 <div className="about-bottom-txt-kv-img-container">
                    
                 </div>
            </section>


            <Footer/>
        </body>
    )
}

export default About