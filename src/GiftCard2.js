import React, { useState } from 'react';
import LogoSmall from './images/LogoSmall.png';


export default function GiftCard2() {


  // const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  
  
  const [price, setPrice] = useState(0);
  const items = 
  // only need a string to store the price and send it / change it in the project (delete array)
  // only need to use a usestate for price that changes depending on which price button clicked, 
  // need an event listener for the custom price box that sets the state to x number
  [
    
    {
      id: 1,
      price: 20,
    },
    {
      id: 2,
      price: 40,
    },
    {
      id: 3,
      price: 60,
    },
    {
      id: 4,
      price: 80,
    },
    // {
    //   id: 5,
    //   price: 51,
    // },
  ];

//   useEffect(() => {
//     total();
//   }, [cart]);

//   const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal);
//   };

//   const addToCart = (el) => {
//       setCart([...cart, el]);
//   };
//   const setOurPrice = () => {
//     setPrice(items.price);
// };

//   const removeFromCart = (el) => {
//     let hardCopy = [...cart];
//     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
//     setCart(hardCopy);
//   };
  
  const listItems = items.map((el) => (
    <div key={el.id}>
      {/* {`$${el.price}`} */}
       {/* <button type="submit" value="" onClick={() => setOurPrice()  ? console.log(price) : console.log("failed")}>{`$${el.price}`} </button>  */}
       
      <button type="submit" value="" onClick={() => setPrice(el.price)}>{`$${el.price}`} </button> 
    </div>
  ));
  console.log(price)
  
  // refactor the code, replace the input tag with button tag and onclick set price state to each
  // button's price value
  // const cartItems = cart.map((el) => (
  //   <div key={el.id}>
  //     {` $${el.price}`}
  //     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
  //   </div>
  // ));

    return (
        <main className="gift-cards-container">
            <nav>
                {/* <span>Dummy Text</span> */}
                <a className="item-1" href="/"><img src={LogoSmall }alt="Retro-Zone-Home-Button" /></a>
                <a className="item-2" href=""><p>Order an eGift card</p></a>
            </nav>

            <div class="background-color-container">
                <span>Give the Perfect Gift</span>
                <p>Get a voucher for yourself or gift one to a friend</p>
                <div className="gift-card-img-container"></div>
            </div>

            <div className="payment-container">
              <h2>EGIFT CARD AMOUNT</h2>
              {/* use active css to only add dark theme to the active span item */}
              <section className="price-buttons">
                <span>{listItems}</span>
                {/* <span>$40</span>
                <span>$60</span>
                <span>$80</span> */}
                {/* <span>CUSTOM</span> */}
              </section>

              <h2>PROMOTION CODE</h2>
              <input type="text" placeholder="   MYDISCOUNTCODE" />

              <div class="user-form-flexbox">
                <article>
                    <h2>YOUR NAME</h2>
                    <input type="text" placeholder="   Your Name"/>
                </article>
                <article>
                    <h2>EMAIL</h2>
                    <input type="text" placeholder="   email@example.com"/>
                </article>
              </div>

              <figure className="checkbox-container">
                <input type="checkbox" id="" name="" value="Boat"/>
                <span>I want to send this to myself</span>
              </figure>

              <div class="recipient-form-flexbox">
                <aside>
                    <h2>RECIPIENT NAME</h2>
                    <input type="text" placeholder="   Recipient Name"/>
                </aside>
                <aside>
                    <h2>RECIPIENT EMAIL</h2>
                    <input type="text" placeholder="   email@example.com"/>
                </aside>
              </div>

              <h2 className="personal-msg-txt">PERSONAL MESSAGE <u>(OPTIONAL)</u></h2>
              <textarea name="" id="" cols="30" rows="4"></textarea>
              
              <h2>DELIVERY</h2>
              <div class="delivery-buttons-flexbox">
                <aside> 
                    <div className="delivery-active">SEND INSTANTLY</div>
                </aside>
                <aside>
                    <div>SEND ON A FUTURE DATE</div>
                </aside>
              </div>

              <span className="checkout-button">
                Continue
              </span>
            </div>

            <div>
                STORE
                <div>{listItems}</div>
                <div>CART</div>
                {/* <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div> */}
            </div>
            
        </main>
    )
}
