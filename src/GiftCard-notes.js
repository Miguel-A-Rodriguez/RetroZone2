import React, { useRef, useState } from 'react';
import LogoSmall from './images/LogoSmall.png';

// handleItemSelect once is clicked it would take in parameters the index 
const ListItems = ({item, index, itemSelect, setPrice, handleSelectColor, handleItemSelect}) => {
  
  return (
    <div style={handleSelectColor(index, itemSelect)} onClick={() => {setPrice(item.price); handleItemSelect(index) }}> 
      <span>{`$${item.price}.00`}</span>
    </div>
  )
};
const makePriceItems = (items, itemSelect = false) => {
  let priceItems = items.map((item, index)=>{
    return { 
      itemSelect: itemSelect,
      item: item,
      index: index
    }
  })
  return priceItems
}
  // console.log(price)
  // console.log(itemSelect)

export default function GiftCard2() {


  // const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  // only need a string to store the price and send it / change it in the project (delete array)
  // only need to use a usestate for price that changes depending on which price button clicked, 
  // need an event listener for the custom price box that sets the state to x number
    
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
    ]
  );
  
  const priceItems = useRef(makePriceItems(items.current, false));
  console.log(priceItems.current);
  // const handleTrackClick = (trackClicked, group) => {
  //   let resetTrackActive = tracksSelect.map((track, trackIndex) => {
  //     let trackCopy = { ...track };
  //     if (trackCopy.isActive) {
  //       trackCopy.isActive = false;
  //     }
  //     return trackCopy;
  //   });
  //   let newTracksSelect = resetTrackActive.map((track, trackIndex) => {
  //     let trackCopy = { ...track };
  //     if (trackIndex === trackClicked) {
  //       trackCopy.isActive = !track.isActive;
  //     }
  //     return trackCopy;
  //   });
  //   setTracksSelect(newTracksSelect);
  // };
  
  const handleSelectColor = (index, itemSelect) => {
    if (itemSelect && index === 0) {
      return {backgroundColor: "black", color: "white"}
    } else if (itemSelect && index === 1) {
      return {backgroundColor: "black", color: "white"}
    } else if (itemSelect && index === 2) {
      return {backgroundColor: "black", color: "white"}
    } else if (itemSelect && index === 3) {
      return {backgroundColor: "black", color: "white"}
  }
  }

  // const listItems = items.map((el, index) => (
  //   <div key={el.id} className={`item-list ${itemSelect && "price-selected"}`} type="submit" value="" onClick={() => {
  //     setPrice(el.price);
  //     handleSelectColor(index);
  //     setItemSelect(!itemSelect);
  //     console.log(index)
  //     }
  //   }>
       
  //      <span>{`$${el.price}`} </span> 
  //    </div>
  // ));
  console.log(price)
  // console.log(itemSelect)

  
  // refactor the code, replace the input tag with button tag and onclick set price state to each
  // button's price value
  // const cartItems = cart.map((el) => (
  //   <div key={el.id}>
  //     {` $${el.price}`}
  //     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
  //   </div>
  // ));
  const handleItemSelect = (index) => {
    priceItems.current.forEach(({index, item, itemSelect},i) => {
      priceItems.current[i].itemSelect = false
    });
    priceItems.current[index].itemSelect = true; 
    // pass handleItemSelect as props to ListItems component via the return below
    // would change items.current[index] = true
  }
  console.log(priceItems.current)
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
                    />
                  ))
                  }
                  <b>CUSTOM</b>
                </span>
                {/* <div className="custom-button"><span>CUSTOM</span></div> */}
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
                {/* <div>{listItems}</div> */}
                <div>CART</div>
                {/* <div>{cartItems}</div>
                <div>Total: ${cartTotal}</div> */}
            </div>
            
        </main>
    )
}
