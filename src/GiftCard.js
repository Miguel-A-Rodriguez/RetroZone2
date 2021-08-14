import React, { useEffect, useState } from 'react';
import LogoSmall from './images/LogoSmall.png';


export default function GiftCard() {


    const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "overwatch",
      price: 20,
    },
    {
      id: 2,
      name: "minecraft",
      price: 32,
    },
    {
      id: 3,
      name: "fortnite",
      price: 51,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

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


            <div>
                STORE
                <div>{listItems}</div>
                <div>CART</div>
                <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div>
            </div>
            <div>
                STORE
                <div>{listItems}</div>
                <div>CART</div>
                <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div>
            </div>
            <div>
                STORE
                <div>{listItems}</div>
                <div>CART</div>
                <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div>
            </div>
            <div>
                STORE
                <div>{listItems}</div>
                <div>CART</div>
                <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div>
            </div>
            
            {/* Need Stripe Component Here */}
        </main>
    )
}
