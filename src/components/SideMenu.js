// With custom items
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const SideMenu = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <Link to="/">
      HOME
    </Link>,
    <Link to="/Pricing">
      PRICING
    </Link>,
    <Link to="/Parties">
      PARTIES & RENTALS
    </Link>,
     <Link to="/Drinks">
      DRINKS
     </Link>,
    <Link to="/Events">
      EVENTS CALAENDER
    </Link>,
     <Link to="/About">
      ABOUT US
    </Link>,
    <Link to="/GiftCard2">
      GIFT CARDS
    </Link>,
    // <p onClick={() => setShowNav(false)}>Close</p>
  ];
 
  const title = <h1> Navigation </h1>;
 
  return (
    <div className="sidebar">
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} itemStyle={{color: "black"}} navStyle={{maxWidth: "300px"}}  />
      
    </div>
  );
}
export default SideMenu;