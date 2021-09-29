import { useEffect, useRef, useState } from 'react';
import "react-datetime/css/react-datetime.css";
import DateTime from './components/DateTime';
import { ListItems, makePriceItems } from './components/ListItems';
import LogoSmall from './images/LogoSmall.png';
import content from './static/content';

export default function GiftCard2() {
  
  const [customInput, setCustomInput] = useState(false);

  const [price, setPrice] = useState(20);
  const [promoCounter, setPromoCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [promoText, setPromoText] = useState("");
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
  useEffect(() => {
    console.log(price)
  });
  const handleSelectColor = (index, itemSelect) => {
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
  const handleCustomButton = (index, setCustomInput) => {
    if (index === 4){
     setCustomInput(true)
    } else {
     setCustomInput(false)
    }
  } 


  const handleItemSelect = (index) => {
    // this line below sets all of priceItems' itemSelect property to false before changing the clickd item to true
    priceItems.current.forEach(({index, item, itemSelect},i) => {
      priceItems.current[i].itemSelect = false
    });
    priceItems.current[index].itemSelect = true; 
  }
  
  

  const handleCustomPrice = (e) =>{
    const customValue = +e.target.value
    if (customValue <= 2001 || customValue > 0){
    setPrice(customValue) 
    } else {
      setPrice(0);
    }
  }

  const handleKeyDown = e => {
    if (e.key === "e" || 0) {
      e.preventDefault();
    }
  };


  const handlePromoCode = () =>{
    console.log(promoText)
    if (promoText === "Retro"){
        setPrice(price * 0.90);
        setIsDisabled(true); 
        console.log(price);
      } else if (promoText === "Game"){
        setPrice(price * 0.85); 
        setIsDisabled(true);
        console.log(price);
      } else if (promoText === "Party"){
          setPrice(price * 0.80); 
          setIsDisabled(true);
          console.log(price);
        };
   };
  // {(event) => setPromo(event.target.value)}
    return (
        <main className="gift-cards-container">
            <nav>
                <a className="item-1" href="/"><img src={LogoSmall }alt="Retro-Zone-Home-Button" /></a>
                <a className="item-2" href=""><p>Order an eGift card</p></a>
            </nav>

            <div className="background-color-container">
                <span>Give the Perfect Gift</span>
                <p>Get a voucher for yourself or gift one to a friend</p>
                <div className="gift-card-img-container"></div>
            </div>

            <form className="payment-container">
              <label>EGIFT CARD AMOUNT</label>
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
                      setIsDisabled={setIsDisabled}
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
                    placeholder=" $1 to $2,000"
                    value ={price ? price : ""} 
                    onChange = {handleCustomPrice}
                    onKeyDown={handleKeyDown}
                    />
                )}

              <label>PROMOTION CODE</label>
              <input 
                  disabled={isDisabled}
                  onChange={(event) => setPromoText(event.target.value)}
                  type="text" 
                  placeholder="   MYDISCOUNTCODE" />
              <button 
                  type="button" 
                  onClick={handlePromoCode}
                  disabled={isDisabled}
              >
                   Apply
              </button>

            <div className="user-form-flexbox">
              <article >
                {content.yourNameEmail.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}/>
                          </section>
                      </>
                  );
                })}
              
              </article>
            </div>
              

              {/* <div className="user-form-flexbox">
                    <article>
                        <label>YOUR NAME</label>
                        <input type="text" placeholder="   Your Name"/>
                    </article>
                    <article>
                        <label>YOUR EMAIL</label>
                        <input type="text" placeholder="   email@example.com"/>
                    </article>
              </div> */}

              <figure className="checkbox-container">
                <input type="checkbox" id="" name="" value="Boat"/>
                <span>I want to send this to myself</span>
              </figure>

              <div className="user-form-flexbox">
              <article >
                {content.recipientNameEmail.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}/>
                          </section>
                      </>
                  );
                })}
              
              </article>
            </div>
              {/* <div className="recipient-form-flexbox">
                <aside>
                    <label>RECIPIENT NAME</label>
                    <input type="text" placeholder="   Recipient Name"/>
                </aside>
                <aside>
                    <label>RECIPIENT EMAIL</label>
                    <input type="text" placeholder="   email@example.com"/>
                </aside>
              </div> */}

              <label className="personal-msg-txt">PERSONAL MESSAGE <u>(OPTIONAL)</u></label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
              
              <label>DELIVERY</label>
              <div className="delivery-buttons-flexbox">
                <aside> 
                    <div className="delivery-active">SEND INSTANTLY</div>
                </aside>
                <aside>
                    <div>SEND ON A FUTURE DATE</div>
                </aside>

                
              </div>
              <section className="calendar">
                <DateTime/>
              </section>
              <span className="checkout-button">
                Continue
              </span>
            </form>
        </main>
    )
}
