import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import LogoSmall from '../src/images/LogoSmall.png';
import { ContactUs } from './components/AutoEmail';
import PaymentInputs from './components/PaymentInputs';
export default function CheckOut() {
    let history = useHistory();

    // after getting the state values from giftcard 
    // convert the states into variables that can be passed into the input fields of the
    // stripe api component
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state.price); // result: 'some_value'
       console.log(location.state.discountedPrice); // result: 'some_value'
       console.log(location.state.personalMessageText); // result: 'some_value'
       console.log(location.state.date); // result: 'some_value'
       console.log(location.state.yourName); // result: 'some_value'
       console.log(location.state.yourEmail); // result: 'some_value'
       console.log(location.state.recipientName); // result: 'some_value'
       console.log(location.state.recipientEmail); // result: 'some_value'
    }, [location]);

    const date = (location.state.date);
    const userName = (location.state.yourName);
    const userEmail = (location.state.yourEmail);
    const recieverName = (location.state.recipientName);
    const recieverEmail = (location.state.recipientEmail);
    const price = (location.state.discountedPrice);
    const personalMessage = (location.state.personalMessageText);

    const editFunction = () => {
        history.push({
            pathname: '/GiftCard2',
        });
    }
    // Intl.DateTimeFormat
    // Jan 1, 2011

    // Intl.DateTimeFormat.format(ACCEPTS DATE OBJECT)
    // 例　Intl.DateTimeFormat.format(new Date())
    // Intl.DateTimeFormat.format(new Date('2021-08-11'))
    return (
        <main className="checkout-container">
            <nav>
                <a className="item-1" href="/"><img src={LogoSmall }alt="Retro-Zone-Home-Button" /></a>
                <a className="item-2" href=""><p>Order an eGift card</p></a>
            </nav>

            <section className="checkout-title">
                <h1>Checkout</h1>
                <h2>Confirm your order details and enter your billing information</h2>
            </section>

            <section className="checkout-content-container">
                
                <div className="stripe-js-content-container">

                    <div className="digital-wallet-divder">
                        <div className="divider-line"></div>
                        <h2>Or</h2>
                    </div>

                    <span class="payment-inputs__container">
                        <PaymentInputs/>
                    </span>
                    <ContactUs
                    yourName={userName}
                    yourEmail={userEmail}
                    recipientEmail={recieverEmail}
                    recipientName={recieverName}
                    price={price}
                    personalMessage={personalMessage}
                    />
                    <div class="payment-warning">
                        <p>
                            By purchasing an eGift Card you agree to Square’s <b>Give & Get Local Terms</b>, <b>Privacy Policy</b>, and <b>E-Sign Consent</b>.
                        </p>
                        <p>
                             By completing this purchase, I acknowledge that I am liable for any loss associated with the gift card purchase in the event that the seller is unable to fulfill the goods or services.
                        </p>
                    </div>
                </div>

                <div className="order-details__container">
                    <article className="order-details__top-content">
                        <span>ORDER DETAILS</span>
                        <p onClick={editFunction}><b>EDIT</b></p>
                    </article>

                    
                 <div class="order-details__top-element-border">
                     <div className="gift-card-payment-img-container"></div>
                 </div>
                    

                    <article className="order-details__content">

                        <section className="price-date__flex">
                            <h1>{`$${location.state.price}.00`}</h1>
                            <h2>{new Intl.DateTimeFormat('en', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                }).format(new Date(date))}
                            </h2>
                        </section>

                        <section className="pay-amount__flex">
                            <div className="amount-pay__container">
                                <h4>{`$${location.state.price}.00`}</h4>
                                <h3>Amount you pay</h3>
                            </div>
                        </section>

                        <div className="recipient-credentials">
                            <p>{recieverName ? recieverName : userName}</p>
                            <p>{recieverEmail ? recieverEmail : userEmail}</p>
                        </div>
                        <p className="location-tag">
                            Valid at Retro Zone Arcade, located at 2158 Colonial Blvd. #3, Fort Myers, Fl. 33907 Children under 16 must be accompanied by an adult.
                             Value does not expire.
                        </p>

                    </article>
                </div>

            </section>
        </main>
    )
}
