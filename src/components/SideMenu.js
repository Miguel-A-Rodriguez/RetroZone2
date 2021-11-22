// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 
const SideMenu = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <a href="GiftCard2">
      HOME
    </a>,
    <a href="someLink">
      PRICING
    </a>,
    <a href="someLink">
      PARTIES & RENTALS
    </a>,
     <a href="someLink">
      DRINKS
     </a>,
    <a href="someLink">
      EVENTS CALAENDER
    </a>,
     <a href="someLink">
      ABOUT US
    </a>,
    <a href="someLink">
      GIFT CARDS
    </a>,
  ];
 
  const title = <h1> Navigation </h1>;
 
  return (
    <div className="sidebar">
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} itemStyle={{color: "black"}}/>
    </div>
  );
}
export default SideMenu;