import { yupResolver } from '@hookform/resolvers/yup';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "react-datetime/css/react-datetime.css";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import { ListItems, makePriceItems } from './components/ListItems';
import LogoSmall from './images/LogoSmall.png';
import content from './static/content';
export default function GiftCard2() {


// potential solution for conditonal validation based on a state

// no more conditional schema, just recreating a schema every time recipientInfo changes
const FormSchema = (recipientInfo) => yup.object().shape({
  recipientname: recipientInfo ? yup.string().required("Please enter a recpient Name") : yup.string(),
  recipientemail: recipientInfo ? yup.string().required("Please enter a recpient Email") : yup.string(),
  yourname: yup.string().required("Please enter Your Name"),
  youremail: yup.string().required("Please enter Your Email"),
  
})
const [recipientInfo,setRecipientInfo] = useState(true);
const [schema, setSchema] = useState(() => FormSchema(recipientInfo));

// every time recipientInfo changes, recreate the schema and set it in the state
useEffect(() => {
  setSchema(FormSchema(recipientInfo));
},[recipientInfo]);

useEffect(() => {
  const date = new Date();
  const formattedDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  setDate(formattedDate)
},[]);



  const {register, handleSubmit, formState: { errors }} = useForm(
    {
      resolver: yupResolver(schema),
    },
  );
  const history = useHistory();
  const onSubmit = (data) => {

    // console.log(data);
      history.push({
        pathname: '/CheckOut',
        // search: '?query=abc',
        state: { price, discountedPrice, personalMessageText, date, yourName, yourEmail, recipientName, recipientEmail}
    });
    
  };
  // console.log(errors);

  const [customInput, setCustomInput] = useState(false);

  const [price, setPrice] = useState(20);
  const [discountedPrice, setDiscountedPrice] = useState(price);

  const [isDisabled, setIsDisabled] = useState(false);


  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const [promoText, setPromoText] = useState("");
  const [personalMessageText, setPersonalMessageText] = useState("");
  const [sendInstantlyButton, setSendInstantlyButton] = useState(true);
  const [sendFutureButton, setSendFutureButton] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log(yourName)
  // console.log(personalMessageText)
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
    // console.log(price)
  });

  
  
  const handleCustomButton = (index, setCustomInput) => {
    if (index === 4){
     setCustomInput(true)
    } else {
     setCustomInput(false)
    }
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
  

   const [date, setDate] = useState(new Date());
   const [tabIndex, setTabIndex] = useState(0);

  
  //  function handleChange(event) {
  //   console.log(event.target.value);
  // }
  console.log(yourName);

  useEffect(() => {
    console.log(date);
  },[date]);

  const MyProps = {
    prop1: "123123",
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
            
            <form onSubmit={handleSubmit(onSubmit) } className="payment-container">
              <label>EGIFT CARD AMOUNT</label>
              <section className="price-buttons">
                <span className="list-items">
                  {priceItems.current.map(({index, item, itemSelect}, i) => (
                    <ListItems
                      item={item}
                      index={index}
                      key={"item" + index}
                      itemSelect={itemSelect}
                      price = {price}
                      selected={tabIndex === i}
                      setPrice={setPrice}
                      items={items}
                      handleItemSelect={() => setTabIndex(i)}

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
                    disabled={promoText === "" ? true : isDisabled} 
                >
                     Apply
                </button>
           

            <div className="user-form-flexbox">
              <article >

                {/* your name input  */}
                {content.yourName.map((input, index)=>{
                return (
                      <>
                          <section key={index}>
                            <p></p>
                            <label>{input.label}</label>
                            <input 
                            onInput={(event) => setYourName(event.target.value)}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            {...register(input.name, {
                              required: true,
                            })}
                            />
                          {/* <p className="error-message">{errors.yourName && errors.yourName.message}</p> */}
                          <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                      </>
                  );
                })}

                {/* Your Email Input */}
                {content.yourEmail.map((input, index)=>{
                return (
                      <>
                          <section key={index}>
                            <p></p>
                            <label>{input.label}</label>
                            <input 
                            onInput={(event) => setYourEmail(event.target.value)}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            {...register(input.name, {
                              required: true,
                            })}
                            />
                            {/* <p className="error-message">{errors.yourEmail && errors.yourEmail.message}</p> */}
                            <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                            
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
                value="Boat"
                // checked
                />
                <span>I want to send this to myself</span>
              </figure>
              
              {recipientInfo &&  (
              <div className="user-form-flexbox">
              <article >
                {/* Recipient Name Input */}
                {content.recipientName.map((input, index)=>{
                return (
                      <>
                          <section key={index}>
                            <p ></p>
                            <label>{input.label}</label>
                            <input 
                            // autoFocus="false"
                            onInput={(event) => setRecipientName(event.target.value)}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            {...register(input.name, {
                              required: true,
                            })}
                            />
                            {/* <p className="error-message">{errors.recipientName && errors.recipientName.message}</p> */}
                            <p className="error-message">{errors[input.name]?.message}</p>
                          </section>
                      </>
                  );
                })}

                {/* Recipient Email Input */}
                {content.recipientEmail.map((input, index)=>{
                return (
                      <>
                          <section key={index}>
                            <p ></p>
                            <label>{input.label}</label>
                            <input 
                            onInput={(event) => setRecipientEmail(event.target.value)}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            ref={register}
                            {...register(input.name, {
                              required: true,
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

            {recipientInfo &&  (
                <>
                  <label className="personal-msg-txt">PERSONAL MESSAGE <u>(OPTIONAL)</u></label>
                  <textarea 
                  name="" 
                  id="" 
                  onChange={(event) => setPersonalMessageText(event.target.value)}
                  cols="30" 
                  rows="4">
                  </textarea>
                </>
              )}
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
                 <Calendar
                //  onChange={setDate}
                  onChange={(e) => {
                    const date = new Date(e);
                    const formattedDate = date.toISOString(); // "2021-01-11T12301239"
                  // https://en.wikipedia.org/wiki/ISO_8601
                  
                  // date -> new Date()
                  setDate(formattedDate)
                    }}
                  date={date}
                  maxDate={new Date('2022-10-31')}
                  
                        />
              </section>
            )}

              <button 
              className="checkout-button" 
              type="submit"
              disabled={errors.length >= 1}
              >
                Continue
              </button>
            </form>
            <Formik validationSchema={schema} />
        </main>
        
    )
}
