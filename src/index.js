import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import CheckOut from './CheckOut';
import Drinks from "./Drinks";
import Events from "./Events";
import GiftCard from "./GiftCard";
import GiftCard2 from "./GiftCard2";
import Home from './Home';
import Parties from "./Parties";
import Pricing from "./Pricing";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Parties" component={Parties} />
        <Route path="/Events" component={Events} />
        <Route path="/About" component={About} />
        <Route path="/GiftCard" component={GiftCard} />
        <Route path="/GiftCard2" component={GiftCard2} />
        <Route path="/Checkout" component={CheckOut} />
        <Route path="/Drinks" component={Drinks} />
        {/* <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
    </Switch>
  </BrowserRouter>,
  rootElement
);