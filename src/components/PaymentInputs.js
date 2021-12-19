import { default as React } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export default function PaymentInputs({cardNumber, setCardNumber, expiryDate, setExpiryDate, cvcNumber, setCvcNumber}) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  
  
  
  const handleCardNumber = (e) => {
     let value = e.target.value;
     let crdNum = value.toString();
     setCardNumber(crdNum);
    console.log(!isNaN(crdNum)); // true if its a number, false if not
    console.log(crdNum.length)
  }
 

  const handleExpiryNumber = (e) => {
    let value = e.target.value;
    let expNum = value.toString();
     setExpiryDate(expNum);
    console.log(!isNaN(expNum)); // true if its a number, false if not
    console.log(expNum.length)
 }
 
 

 const handleCvcNumber = (e) => {
  let value = e.target.value;
  let cvNum = value.toString();
  setCvcNumber(cvNum);
  console.log(!isNaN(cvNum)); // true if its a number, false if not
  console.log(cvNum.length)
}
  
  return (
    <>
    <PaymentInputsWrapper {...wrapperProps} style={{maxWidth: "300px"}}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({onChange: handleCardNumber})} />
      <input {...getExpiryDateProps({onChange: handleExpiryNumber})} />
      <input {...getCVCProps({onChange: handleCvcNumber})} />
    </PaymentInputsWrapper>

</>
  );
}