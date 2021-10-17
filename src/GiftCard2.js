import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import "react-datetime/css/react-datetime.css";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import DateTime from './components/DateTime';
import { ListItems, makePriceItems } from './components/ListItems';
import LogoSmall from './images/LogoSmall.png';
import content from './static/content';

const schema = yup.object().shape({
  recipientname: yup.string().required("Please Enter Their Name"),
  recipientemail: yup.string().required("Please Enter an Email").email(),
  yourname: yup.string().required("Please Enter Your Name"),
  youremail: yup.string().required("Please Enter an Email").email(),
});
export default function GiftCard2() {

  const {register, handleSubmit, formState: { errors }, ...props} = useForm(
    {
      resolver: yupResolver(schema), 
    }
  );
  console.log(props);
  const onSubmit = (data) => {
    // call handleSubmit with the data payload IF there aren't any errors, ie: !errors.length >= 1
    // if there are errors, return or do whatever you want with it
    // handleSubmit(data);

    // redirect to next page after
    // history.push("/CheckOut");
    console.log(data);
  };
  const [customInput, setCustomInput] = useState(false);

  const [price, setPrice] = useState(20);
  const [promoCounter, setPromoCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [recipientInfo, setRecipientInfo] = useState(true);
  const [promoText, setPromoText] = useState("");
  const [personalMessageText, setPersonalMessageText] = useState("");
  const [sendInstantlyButton, setSendInstantlyButton] = useState(true);
  const [sendFutureButton, setSendFutureButton] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const defaultPriceButtonColor = (price, index, itemSelect) => {

  }

  const handleSelectColor = (index, itemSelect, price) => {
    if (price === 20 && index === 0) {
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
  
   const handleInstantButton = () => {
    setSendInstantlyButton(true);
    setSendFutureButton(false);
   }
   const handleFutureButton = () => {
    setSendFutureButton(true);
    setSendInstantlyButton(false);
   }
  
  //  const onSubmitRedirect = (e) => {
  //   const history = useHistory();
  //   e.preventDefault();
  //  history.push('/CheckOut')
  // }
  // function ProfileForm() {
  //   const history = useHistory();
  //   const onSubmitRedirect = (e) => {
  //      e.target.reset();
  //      history.push({
  //         pathname:  "/CheckOut",
  //      });
  //   }
  // } 

  const history = useHistory();

  const handleSubmitRedirect = (event) => {
  }

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
            {/* (event) => handleSubmitRedirect(event) */}
            <form onSubmit={handleSubmit(onSubmit)} className="payment-container">
              <label>EGIFT CARD AMOUNT</label>
              <section className="price-buttons">
                <span className="list-items">
                  {priceItems.current.map(({index, item, itemSelect},i) => (
                    <ListItems
                      item={item}
                      index={index}
                      key={"item" + i}
                      itemSelect={itemSelect}
                      price = {price}
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
                    className="promo-code-input"
                    disabled={isDisabled}
                    onChange={(event) => setPromoText(event.target.value)}
                    type="text"
                    placeholder="   MYDISCOUNTCODE"
                
                    />
                <button
                    className="promo-code-button"
                    type="button"
                    onClick={handlePromoCode}
                    disabled={isDisabled}
                >
                     Apply
                </button>
           

            <div className="user-form-flexbox">
              <article >

                {/* your name input  */}
                {content.yourName.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input name={input.name}
                            // autoFocus="false"
                            type={input.type}
                            placeholder={input.placeholder}
                            {...register("yourName", {
                              required: "Required Field",
                            })}
                            />
                            {/* <p className="error-message">{errors.yourName && errors.yourName.message}</p> */}
                          <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                      </>
                  );
                })}

                {/* Your Email Input */}
                {content.yourEmail.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input name={input.name}
                            // autoFocus="false"
                            type={input.type}
                            placeholder={input.placeholder}
                            ref={register}
                            {...register("yourEmail", {
                              required: "Required Field",
                            })}
                            />
                            {/* <p className="error-message">{errors.yourEmail && errors.yourEmail.message}</p> */}
                            <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                            {/* <p>{errors[input.name]?.message}</p> */}
                      </>
                  );
                })}
              
              </article>
            </div>
            
              <figure className="checkbox-container">
                <input 
                type="checkbox" 
                name=""
                onClick={() => setRecipientInfo(!recipientInfo)} 
                value="Boat"/>
                <span>I want to send this to myself</span>
              </figure>
              
              {recipientInfo &&  (
              <div className="user-form-flexbox">
              <article >
                {/* Recipient Name Input */}
                {content.recipientName.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input 
                            // autoFocus="false"
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            ref={register}
                            {...register("recipientName", {
                              required: "Required Field",
                            })}
                            />
                            {/* <p className="error-message">{errors.recipientName && errors.recipientName.message}</p> */}
                            <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                      </>
                  );
                })}

                {/* Recipient Email Input */}
                {content.recipientEmail.map((input, key)=>{
                return (
                      <>
                          <section>
                            <p key={key}></p>
                            <label>{input.label}</label>
                            <input 
                            // autoFocus="false"
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            ref={register}
                            {...register("recipientEmail", {
                              required: "Required Field",
                            })}
                            />
                            {/* <p className="error-message">{errors.recipientEmail && errors.recipientEmail.message}</p> */}
                            <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                      </>
                  );
                })}
               
              </article>
            </div>
           )}
              <label className="personal-msg-txt">PERSONAL MESSAGE <u>(OPTIONAL)</u></label>
              <textarea 
              name="" 
              id="" 
              onChange={(event) => setPersonalMessageText(event.target.value)}
              cols="30" 
              rows="4">
              </textarea>
              {/* try putting functions in the onClicks that set the states */}
              <label>DELIVERY</label>
              <div className="delivery-buttons-flexbox">
                <aside> 
                    <div 
                    className={sendInstantlyButton ? 'delivery-active' : 'delivery'}
                    onClick={ handleInstantButton }
                    >
                      SEND INSTANTLY</div>
                </aside>
                <aside>
                    <div 
                    className={sendFutureButton ? 'delivery-active' : 'delivery'}
                    onClick={handleFutureButton}
                    >
                      SEND ON A FUTURE DATE</div>
                </aside>

                
              </div>

            {sendFutureButton &&  (
              <section className="calendar">
                <DateTime />
              </section>
            )}

              <button 
              className="checkout-button" 
              type="submit"
              disabled={errors.length >= 1}
              onClick="">
                Continue
              </button>
            </form>
        </main>
    )
}
