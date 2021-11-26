// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 
const SideMenu = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <a href="/">
      HOME
    </a>,
    <a href="Pricing">
      PRICING
    </a>,
    <a href="Parties">
      PARTIES & RENTALS
    </a>,
     <a href="Drinks">
      DRINKS
     </a>,
    <a href="Events">
      EVENTS CALAENDER
    </a>,
     <a href="About">
      ABOUT US
    </a>,
    <a href="GiftCard2">
      GIFT CARDS
    </a>,
    <p onClick={() => setShowNav(false)}>Close</p>
  ];
 
  const title = <h1> Navigation </h1>;
 
  return (
    <div className="sidebar">
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} itemStyle={{color: "black"}}  />
      
    </div>
  );
}
export default SideMenu;