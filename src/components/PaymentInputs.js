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
     setCardNumber(e.target.value);
  }
  console.log(cardNumber);

  const handleExpiryNumber = (e) => {
    setExpiryDate(e.target.value);
 }
 console.log(expiryDate);

 const handleCvcNumber = (e) => {
  setCvcNumber(e.target.value);
}
console.log(cvcNumber);
  
  return (
    <>
    <PaymentInputsWrapper {...wrapperProps} >
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({onChange: handleCardNumber})} />
      <input {...getExpiryDateProps({onChange: handleExpiryNumber})} />
      <input {...getCVCProps({onChange: handleCvcNumber})} />
    </PaymentInputsWrapper>

</>
  );
}