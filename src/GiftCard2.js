import React, { useRef, useState } from 'react';
import { ListItems, makePriceItems } from './components/ListItems';
import LogoSmall from './images/LogoSmall.png';

export default function GiftCard2() {
  const [customInput, setCustomInput] = useState(false);

  const [price, setPrice] = useState(20);
  const items = useRef(
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
      {
        id: 5,
        price: "Custom",
      },
    ]
  );
  const priceItems = useRef(makePriceItems(items.current, false));

  const handleSelectColor = (index, itemSelect, setCustomInput) => {
    handleCustomButton(index, itemSelect, setCustomInput)
    if (itemSelect && index === 0) {
      return {backgroundColor: "black", color: "white"} 
    } else if (itemSelect && index === 1) {
      return {backgroundColor: "black", color: "white"} 
    } else if (itemSelect && index === 2) {
      return {backgroundColor: "black", color: "white"} 
    } else if (itemSelect && index === 3) {
      return {backgroundColor: "black", color: "white"} 
    } else if (itemSelect && index === 4) {
      return {backgroundColor: "black", color: "white"} 
  }
}
  const handleCustomButton = (index, itemSelect, setCustomInput) => {
    if (itemSelect && index === 4){
     setCustomInput(true)
    } else {
     setCustomInput(false)
    }
    console.log(index, itemSelect)
  } 


  const handleItemSelect = (index) => {
    // this line below sets all of priceItems' itemSelect property to false before changing the clickd item to true
    priceItems.current.forEach(({index, item, itemSelect},i) => {
      priceItems.current[i].itemSelect = false
    });
    priceItems.current[index].itemSelect = true; 
  }
  const handleCustomPrice = (e) =>{
    if (e.target.value <= 2001 || e.target.value > 0){
    setPrice(e.target.value) 
    } else {
      setPrice("");
    }
  }

  const handleKeyDown = e => {
    if (e.key === "e" || 0) {
      e.preventDefault();
    }
  };

    return (
        <main className="gift-cards-container">
            <nav>
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
              <section className="price-buttons">
                <span className="list-items">
                  {priceItems.current.map(({index, item, itemSelect},i) => (
                    <ListItems
                      item={item}
                      index={index}
                      key={"item" + i}
                      itemSelect={itemSelect}
                      setPrice={setPrice}
                      handleSelectColor={handleSelectColor}
                      handleItemSelect={handleItemSelect}
                      handleCustomButton={handleCustomButton}
                      setCustomInput={setCustomInput}
                    />
                  ))
                  }
                </span>
              </section>
              {customInput &&  (
                <input 
                type="number" 
                style={price > 2001 || price < 1 ? {border: "2px solid #FF7F7F", outline: "none", borderRadius: "3px"} : {border: "2px solid green", outline: "none", borderRadius: "3px"}}
                min="1" max="2000" 
                placeHolder=" $1 to $2,000"
                value ={price} 
                onChange = {handleCustomPrice}
                setCustomInput = {setCustomInput}
                onKeyDown={handleKeyDown}
                />
                )}

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
        </main>
    )
}
