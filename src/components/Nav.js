import { faSearch, faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

// iframes used for facebook feeds and shopping cart
const Nav = () => {
    return (
            <header>
                <div className="kv-icons-wrapper">
                    <div className="header-kv-img-container">
                        <section>
                            <aside>
                                <Link to="/"><span><img src={Logo} alt="Retro Zone Image" /></span></Link>
                            </aside>
                    
                        </section>
                    </div>
                            <article>
                                <span>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </span>
                            </article>
                </div>
                <nav>
                    <Link to="/"><span>HOME</span></Link>
                    <Link to="/Pricing"><span>PRICING</span></Link>
                    <Link to="/Parties"><span>PARTIES & RENTALS</span></Link>
                    <Link to="/Drinks"><span>DRINKS</span></Link>
                    <Link to="/Events"><span>EVENTS CALENDER </span></Link>
                    <Link to="/About"><span>ABOUT US</span></Link>
                    <Link to="GiftCard2"><span>GIFT CARDS</span></Link>
                </nav>
            </header>
)
}
export default Nav