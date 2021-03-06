import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';

export const ContactUs = ({yourName, yourEmail, recipientEmail, recipientName, price, personalMessage, cardNumber, expiryDate, cvcNumber}) => {


  const form = useRef();
  const [successMessage, setSucessMessage] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    if(cardNumber === "" || expiryDate === "" || cvcNumber === "" || cardNumber.length < 19 || cvcNumber.length < 3 || expiryDate.length < 7) {
      return console.log("Incomplete Card Number")
    } else {
    
    emailjs.sendForm('service_gxh7mwe', 'template_6a3ga5m', form.current, 'user_1jnLkN1CAAAQSJkNQTduj')
      .then((result) => {
          console.log(result.text);
          console.log(stringPrice);
          setSucessMessage(true);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    };
  };

 const stringPrice = price.toString();


  return (
    <>
     <p style={successMessage ? {color: "green", marginBottom:"15px"}: {display: "none"}}>Your Purchase was successful and your GiftCard was sent via Email!</p>
    <form ref={form} onSubmit={sendEmail} className="auto-email-form">



      <label> Sender Name</label>
      <input type="text" name="from_name" defaultValue={yourName} />

      <label> Recipient Name</label>
      <input type="text" name="to_name" defaultValue={recipientName ? recipientName : yourName}/>

      <label>Recipient Email</label>
      <input type="email" name="email" defaultValue={recipientEmail ? recipientEmail : yourEmail} />

      <div className="hidden-input">
        <label>GiftCard Value: </label>
        <input className="hidden-input" type="text" name="price" defaultValue={`$${stringPrice}.00`} readonly="readonly" />
      </div>

      <label> Personal Message</label>
      <textarea name="message" defaultValue={personalMessage}/>
      <input className="payment-submit-button" type="submit" value="Pay With Card" />
    </form>
    
    </>
  );
};